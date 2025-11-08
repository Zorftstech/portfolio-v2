"use client";
import { useEffect, useState } from "react";
import { addPartner, deletePartner, listPartners, updatePartner } from "@/lib/admin/firestore";
import type { Partner } from "@/lib/admin/types";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";
import type { CloudinaryUploadResult } from "@/lib/cloudinaryClient";

type Editing = { id: string; name: string; website_url?: string; logo_url: string } | null;

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState<Partner>({ name: "", logo_url: "", website_url: "" });
  const [editing, setEditing] = useState<Editing>(null);

  async function refresh() {
    setLoading(true);
    try {
      const items = await listPartners();
      setPartners(items);
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
    if (!newItem.name.trim() || !newItem.logo_url.trim()) return;
    setLoading(true);
    try {
      await addPartner({ name: newItem.name.trim(), logo_url: newItem.logo_url.trim(), website_url: newItem.website_url?.trim() });
      setNewItem({ name: "", logo_url: "", website_url: "" });
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate() {
    if (!editing) return;
    setLoading(true);
    try {
      await updatePartner(editing.id, { name: editing.name.trim(), website_url: editing.website_url?.trim(), logo_url: editing.logo_url });
      setEditing(null);
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this partner?")) return;
    setLoading(true);
    try {
      await deletePartner(id);
      await refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Layout: Partners</h2>

      <form onSubmit={onAdd} className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">Add Partner</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.name}
              onChange={(e) => setNewItem((s) => ({ ...s, name: e.target.value }))}
              placeholder="Partner name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Website URL (optional)</label>
            <input
              type="url"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.website_url ?? ""}
              onChange={(e) => setNewItem((s) => ({ ...s, website_url: e.target.value }))}
              placeholder="https://example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Logo</label>
          <div className="mt-2">
            <CloudinaryUpload
              onUploaded={(res: CloudinaryUploadResult) =>
                setNewItem((s) => ({ ...s, logo_url: res.secure_url }))
              }
              buttonText={newItem.logo_url ? "Replace Logo" : "Upload Logo"}
              accept="image/*"
            />
            {newItem.logo_url && (
              <p className="mt-2 text-xs text-gray-600">Uploaded: {newItem.logo_url}</p>
            )}
          </div>
        </div>
        <button type="submit" disabled={loading} className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">
          {loading ? "Adding..." : "Add Partner"}
        </button>
      </form>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium">Existing Partners</h3>
        {loading && partners.length === 0 ? (
          <p className="text-sm text-gray-600 mt-2">Loading...</p>
        ) : (
          <ul className="divide-y">
            {partners.map((p) => (
              <li key={p.id} className="py-3">
                {editing && editing.id === p.id ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      className="w-full rounded border px-3 py-2"
                      value={editing.name}
                      onChange={(e) => setEditing((s) => (s ? { ...s, name: e.target.value } : s))}
                    />
                    <input
                      type="url"
                      className="w-full rounded border px-3 py-2"
                      value={editing.website_url ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, website_url: e.target.value } : s))}
                    />
                    <div>
                      <CloudinaryUpload
                        onUploaded={(res: CloudinaryUploadResult) =>
                          setEditing((s) => (s ? { ...s, logo_url: res.secure_url } : s))
                        }
                        buttonText={"Replace Logo"}
                        accept="image/*"
                      />
                      {editing.logo_url && (
                        <p className="mt-2 text-xs text-gray-600">Uploaded: {editing.logo_url}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={onUpdate} className="rounded bg-blue-600 px-3 py-1 text-white">Save</button>
                      <button onClick={() => setEditing(null)} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {p.logo_url && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.logo_url} alt={p.name} className="h-10 w-10 object-contain" />
                      )}
                      <div>
                        <p className="font-medium">{p.name}</p>
                        {p.website_url && (
                          <a href={p.website_url} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
                            {p.website_url}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditing({ id: p.id!, name: p.name, website_url: p.website_url, logo_url: p.logo_url })} className="rounded bg-gray-200 px-3 py-1">Edit</button>
                      <button onClick={() => onDelete(p.id!)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
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