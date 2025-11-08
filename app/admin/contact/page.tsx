"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { ContactMessage } from "@/lib/admin/types";
import { listContactMessages, addContactMessage, updateContactMessage, deleteContactMessage } from "@/lib/admin/firestore";

export default function AdminContactPage() {
  const [items, setItems] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<{ subject: string; email: string; message: string }>({ subject: "", email: "", message: "" });
  const [editing, setEditing] = useState<ContactMessage | null>(null);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listContactMessages();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load contact messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setForm({ subject: "", email: "", message: "" });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject || !form.email || !form.message) {
      toast.error("All fields are required");
      return;
    }
    setBusy(true);
    try {
      if (editing?.id) {
        await updateContactMessage(editing.id, { subject: form.subject, email: form.email, message: form.message });
        toast.success("Message updated");
      } else {
        await addContactMessage({ subject: form.subject, email: form.email, message: form.message });
        toast.success("Message added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save message");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: ContactMessage) => {
    setEditing(item);
    setForm({ subject: item.subject, email: item.email, message: item.message });
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this message?")) return;
    setBusy(true);
    try {
      await deleteContactMessage(id);
      toast.success("Message deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete message");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Contact Messages</h2>
      <p className="text-sm text-gray-600">Manage messages sent via the Contact form.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Message" : "Add Message"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input className="w-full rounded border px-3 py-2" value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input className="w-full rounded border px-3 py-2" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full rounded border px-3 py-2 h-28" value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">{editing ? "Update" : "Add"}</button>
            {editing && <button type="button" className="px-4 py-2 rounded border" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">Messages</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No messages.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div>
                  <p className="font-medium">{item.subject}</p>
                  <p className="text-sm text-gray-700">{item.email}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.message}</p>
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