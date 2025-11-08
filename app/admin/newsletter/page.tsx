"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { NewsletterSubscriber } from "@/lib/admin/types";
import { listNewsletterSubscribers, addNewsletterSubscriber, updateNewsletterSubscriber, deleteNewsletterSubscriber } from "@/lib/admin/firestore";

export default function AdminNewsletterPage() {
  const [items, setItems] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [editing, setEditing] = useState<NewsletterSubscriber | null>(null);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listNewsletterSubscribers();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setFormEmail("");
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail) {
      toast.error("Email is required");
      return;
    }
    setBusy(true);
    try {
      if (editing?.id) {
        await updateNewsletterSubscriber(editing.id, { email: formEmail });
        toast.success("Subscriber updated");
      } else {
        await addNewsletterSubscriber({ email: formEmail });
        toast.success("Subscriber added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save subscriber");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: NewsletterSubscriber) => {
    setEditing(item);
    setFormEmail(item.email);
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this subscriber?")) return;
    setBusy(true);
    try {
      await deleteNewsletterSubscriber(id);
      toast.success("Subscriber deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete subscriber");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Newsletter Subscribers</h2>
      <p className="text-sm text-gray-600">Manage newsletter subscriber emails.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Subscriber" : "Add Subscriber"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full rounded border px-3 py-2" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">{editing ? "Update" : "Add"}</button>
            {editing && <button type="button" className="px-4 py-2 rounded border" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">Subscribers</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No subscribers.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div>
                  <p className="text-sm text-gray-700">{item.email}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded border" onClick={() => onEdit(item)}>Edit</button>
                  <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => onDelete(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}