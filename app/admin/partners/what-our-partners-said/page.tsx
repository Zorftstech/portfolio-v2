"use client";
import { useEffect, useState } from "react";
import { addPartnersTestimonial, deletePartnersTestimonial, listPartnersTestimonials, updatePartnersTestimonial } from "@/lib/admin/firestore";
import type { PartnerTestimonial } from "@/lib/admin/types";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";
import type { CloudinaryUploadResult } from "@/lib/cloudinaryClient";
import { toast } from "react-toastify";

type Editing = { id: string; name: string; comment: string; avatar_url?: string } | null;

export default function AdminPartnersTestimonialsPage() {
  const [items, setItems] = useState<PartnerTestimonial[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState<{ name: string; comment: string; avatar_url?: string }>({ name: "", comment: "" });
  const [editing, setEditing] = useState<Editing>(null);

  async function refresh() {
    setLoading(true);
    try {
      const list = await listPartnersTestimonials();
      setItems(list);
    } catch (e) {
      console.error(e);
      toast.error("Failed to load partners' testimonials.", { toastId: "partners-testimonials-load-error" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newItem.name.trim() || !newItem.comment.trim()) {
      toast.error("Name and comment are required.", { toastId: "partners-testimonial-add-invalid" });
      return;
    }
    setLoading(true);
    try {
      await addPartnersTestimonial({ name: newItem.name.trim(), comment: newItem.comment.trim(), avatar_url: newItem.avatar_url });
      setNewItem({ name: "", comment: "" });
      toast.success("Testimonial added.", { toastId: "partners-testimonial-add-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to add testimonial.", { toastId: "partners-testimonial-add-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate(e: React.MouseEvent) {
    e.preventDefault();
    if (!editing) return;
    const { id, name, comment, avatar_url } = editing;
    if (!name.trim() || !comment.trim()) {
      toast.error("Name and comment are required.", { toastId: "partners-testimonial-update-invalid" });
      return;
    }
    setLoading(true);
    try {
      await updatePartnersTestimonial(id, { name: name.trim(), comment: comment.trim(), avatar_url });
      setEditing(null);
      toast.success("Testimonial updated.", { toastId: "partners-testimonial-update-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to update testimonial.", { toastId: "partners-testimonial-update-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    setLoading(true);
    try {
      await deletePartnersTestimonial(id);
      toast.success("Testimonial deleted.", { toastId: "partners-testimonial-delete-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete testimonial.", { toastId: "partners-testimonial-delete-error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Partners: What Our Partners Said</h2>

      <form onSubmit={onAdd} className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">Add Testimonial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.name}
              onChange={(e) => setNewItem((s) => ({ ...s, name: e.target.value }))}
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Avatar</label>
            <div className="mt-2">
              <CloudinaryUpload
                onUploaded={(res: CloudinaryUploadResult) =>
                  setNewItem((s) => ({ ...s, avatar_url: res.secure_url }))
                }
                buttonText={"Upload Avatar"}
                accept="image/*"
              />
              {newItem.avatar_url && (
                <p className="mt-2 text-xs text-gray-600">Uploaded: {newItem.avatar_url}</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Comment</label>
          <textarea
            className="mt-1 w-full rounded border px-3 py-2"
            value={newItem.comment}
            onChange={(e) => setNewItem((s) => ({ ...s, comment: e.target.value }))}
            placeholder="Their testimonial"
            rows={3}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add"}
        </button>
      </form>

      <div className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">Testimonials</h3>
        {loading && <p className="text-sm text-gray-600">Loading...</p>}
        {!loading && items.length === 0 && (
          <p className="text-sm text-gray-600">No testimonials yet.</p>
        )}
        <ul className="divide-y">
          {items.map((item) => (
            <li key={item.id} className="py-3">
              {editing?.id === item.id ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full rounded border px-3 py-2"
                        value={editing?.name ?? ""}
                        onChange={(e) => setEditing((s) => (s ? { ...s, name: e.target.value } : s))}
                      />
                    </div>
                    <div>
                      <CloudinaryUpload
                        onUploaded={(res: CloudinaryUploadResult) =>
                          setEditing((s) => (s ? { ...s, avatar_url: res.secure_url } : s))
                        }
                        buttonText={"Change Avatar"}
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="w-full rounded border px-3 py-2"
                      value={editing?.comment ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, comment: e.target.value } : s))}
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={onUpdate} className="rounded bg-blue-600 px-3 py-1 text-white">Save</button>
                    <button onClick={() => setEditing(null)} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.comment}</p>
                    {item.avatar_url && (
                      <p className="text-xs text-gray-500">Avatar: {item.avatar_url}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditing({ id: item.id!, name: item.name, comment: item.comment, avatar_url: item.avatar_url })} className="rounded bg-gray-200 px-3 py-1">Edit</button>
                    <button onClick={() => onDelete(item.id!)} className="rounded bg-red-600 px-3 py-1 text-white">Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}