"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { CareerOpening } from "@/lib/admin/types";
import { listCareers, addCareer, updateCareer, deleteCareer } from "@/lib/admin/firestore";

export default function AdminCareersPage() {
  const [items, setItems] = useState<CareerOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<{ job_title: string; description: string }>({ job_title: "", description: "" });
  const [editing, setEditing] = useState<CareerOpening | null>(null);
  const [busy, setBusy] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listCareers();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load careers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setForm({ job_title: "", description: "" });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.job_title || !form.description) {
      toast.error("Job title and description are required");
      return;
    }
    setBusy(true);
    try {
      if (editing?.id) {
        await updateCareer(editing.id, { job_title: form.job_title, description: form.description });
        toast.success("Career updated");
      } else {
        await addCareer({ job_title: form.job_title, description: form.description });
        toast.success("Career added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save career");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: CareerOpening) => {
    setEditing(item);
    setForm({ job_title: item.job_title, description: item.description });
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this career opening?")) return;
    setBusy(true);
    try {
      await deleteCareer(id);
      toast.success("Career deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete career");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Careers</h2>
      <p className="text-sm text-gray-600">Manage job openings shown on the Careers page.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Opening" : "Add Opening"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              className="w-full rounded border px-3 py-2"
              value={form.job_title}
              onChange={(e) => setForm((f) => ({ ...f, job_title: e.target.value }))}
              placeholder="e.g., Frontend Engineer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full rounded border px-3 py-2 h-28"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="Role summary, responsibilities, requirements"
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">
              {editing ? "Update" : "Add"}
            </button>
            {editing && (
              <button type="button" className="px-4 py-2 rounded border" onClick={resetForm}>Cancel</button>
            )}
          </div>
        </form>
      </div>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">Openings</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No openings yet.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div>
                  <p className="font-medium">{item.job_title}</p>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{item.description}</p>
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