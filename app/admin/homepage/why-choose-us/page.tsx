"use client";
import { useEffect, useState } from "react";
import { addReason, deleteReason, listReasons, updateReason } from "@/lib/admin/firestore";
import type { WhyChooseUsReason } from "@/lib/admin/types";

type Editing = { id: string; subject: string; description: string } | null;

export default function AdminWhyChooseUsPage() {
  const [reasons, setReasons] = useState<WhyChooseUsReason[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ subject: "", description: "" });
  const [editing, setEditing] = useState<Editing>(null);

  async function refresh() {
    setLoading(true);
    try {
      const items = await listReasons();
      setReasons(items);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newItem.subject.trim() || !newItem.description.trim()) return;
    setLoading(true);
    try {
      await addReason({ subject: newItem.subject.trim(), description: newItem.description.trim() });
      setNewItem({ subject: "", description: "" });
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate() {
    if (!editing) return;
    setLoading(true);
    try {
      await updateReason(editing.id, { subject: editing.subject.trim(), description: editing.description.trim() });
      setEditing(null);
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this reason?")) return;
    setLoading(true);
    try {
      await deleteReason(id);
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Homepage: Why Choose Us</h2>

      <form onSubmit={onAdd} className="rounded border bg-white p-4 space-y-3 max-w-xl">
        <h3 className="font-medium">Add Reason</h3>
        <div>
          <label className="block text-sm font-medium">Subject</label>
          <input
            type="text"
            className="mt-1 w-full rounded border px-3 py-2"
            value={newItem.subject}
            onChange={(e) => setNewItem((s) => ({ ...s, subject: e.target.value }))}
            placeholder="Short headline"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            className="mt-1 w-full rounded border px-3 py-2"
            value={newItem.description}
            onChange={(e) => setNewItem((s) => ({ ...s, description: e.target.value }))}
            placeholder="Supportive explanation"
            rows={3}
          />
        </div>
        <button type="submit" disabled={loading} className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">
          {loading ? "Adding..." : "Add"}
        </button>
      </form>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium">Existing Reasons</h3>
        {loading && reasons.length === 0 ? (
          <p className="text-sm text-gray-600 mt-2">Loading...</p>
        ) : (
          <ul className="divide-y">
            {reasons.map((r) => (
              <li key={r.id} className="py-3">
                {editing?.id === r.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      className="w-full rounded border px-3 py-2"
                      value={editing?.subject ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, subject: e.target.value } : s))}
                    />
                    <textarea
                      className="w-full rounded border px-3 py-2"
                      rows={3}
                      value={editing?.description ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, description: e.target.value } : s))}
                    />
                    <div className="flex gap-2">
                      <button onClick={onUpdate} className="rounded bg-blue-600 px-3 py-1 text-white">Save</button>
                      <button onClick={() => setEditing(null)} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{r.subject}</p>
                      <p className="text-sm text-gray-700 mt-1">{r.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditing({ id: r.id!, subject: r.subject, description: r.description })} className="rounded bg-gray-200 px-3 py-1">Edit</button>
                      <button onClick={() => onDelete(r.id!)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}