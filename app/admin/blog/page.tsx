"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { BlogPost, BlogSection } from "@/lib/admin/types";
import { listBlogs, addBlog, updateBlog, deleteBlog } from "@/lib/admin/firestore";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";

type BlogFormState = {
  title: string;
  author: string;
  minute_read?: number;
  tags: string; // comma separated input; will map to array
  cover_image?: string;
  content?: string;
  sections: BlogSection[];
};

export default function AdminBlogPage() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState<BlogFormState>({
    title: "",
    author: "",
    minute_read: undefined,
    tags: "",
    cover_image: "",
    content: "",
    sections: [],
  });

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listBlogs();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setForm({ title: "", author: "", minute_read: undefined, tags: "", cover_image: "", content: "", sections: [] });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      toast.error("Title and author are required");
      return;
    }
    setBusy(true);
    try {
      const payload: Omit<BlogPost, "id"> = {
        title: form.title,
        author: form.author,
        minute_read: form.minute_read,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
        cover_image: form.cover_image,
        content: form.content,
        sections: form.sections,
      };
      if (editing?.id) {
        await updateBlog(editing.id, payload);
        toast.success("Blog updated");
      } else {
        await addBlog(payload);
        toast.success("Blog added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save blog");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: BlogPost) => {
    setEditing(item);
    setForm({
      title: item.title || "",
      author: item.author || "",
      minute_read: item.minute_read,
      tags: item.tags?.join(", ") || "",
      cover_image: item.cover_image || "",
      content: item.content || "",
      sections: item.sections || [],
    });
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this blog?")) return;
    setBusy(true);
    try {
      await deleteBlog(id);
      toast.success("Blog deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete blog");
    } finally {
      setBusy(false);
    }
  };

  const updateSection = (index: number, next: Partial<BlogSection>) => {
    setForm((f) => {
      const sections = [...f.sections];
      sections[index] = { ...sections[index], ...next };
      return { ...f, sections };
    });
  };

  const addSection = () => {
    setForm((f) => ({ ...f, sections: [...f.sections, { heading: "", paragraph: "" }] }));
  };

  const removeSection = (index: number) => {
    setForm((f) => ({ ...f, sections: f.sections.filter((_, i) => i !== index) }));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Blogs</h2>
      <p className="text-sm text-gray-600">Create and manage blogs with structured sections.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Blog" : "Add Blog"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input className="w-full rounded border px-3 py-2" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input className="w-full rounded border px-3 py-2" value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Minutes Read</label>
              <input type="number" min={0} className="w-full rounded border px-3 py-2" value={form.minute_read ?? ""} onChange={(e) => setForm((f) => ({ ...f, minute_read: e.target.value ? Number(e.target.value) : undefined }))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input className="w-full rounded border px-3 py-2" value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cover Image (optional)</label>
            <div className="flex items-center gap-3">
              {form.cover_image ? (
                <img src={form.cover_image} alt="cover" className="h-16 w-16 rounded border object-cover" />
              ) : null}
              <CloudinaryUpload
                accept="image/*"
                buttonText={form.cover_image ? "Change Image" : "Upload Image"}
                onUploaded={(res: any) => setForm((f) => ({ ...f, cover_image: res?.secure_url }))}
              />
              {form.cover_image && (
                <button type="button" className="px-3 py-1 rounded border" onClick={() => setForm((f) => ({ ...f, cover_image: "" }))}>Remove</button>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content (optional)</label>
            <textarea className="w-full rounded border px-3 py-2 h-28" value={form.content ?? ""} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} />
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Sections</h4>
              <button type="button" className="px-3 py-1 rounded border" onClick={addSection}>Add Section</button>
            </div>
            {form.sections.length === 0 ? (
              <p className="text-sm text-gray-600">No sections added.</p>
            ) : (
              <div className="space-y-3">
                {form.sections.map((sec, idx) => (
                  <div key={idx} className="rounded border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-700">Section {idx + 1}</p>
                      <button type="button" className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => removeSection(idx)}>Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Heading</label>
                        <input className="w-full rounded border px-3 py-2" value={sec.heading} onChange={(e) => updateSection(idx, { heading: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Paragraph</label>
                        <textarea className="w-full rounded border px-3 py-2 h-24" value={sec.paragraph} onChange={(e) => updateSection(idx, { paragraph: e.target.value })} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium mb-1">Image (optional)</label>
                      <div className="flex items-center gap-3">
                        {sec.image ? (
                          <img src={sec.image} alt={`section-${idx + 1}`} className="h-14 w-14 rounded border object-cover" />
                        ) : null}
                        <CloudinaryUpload
                          accept="image/*"
                          buttonText={sec.image ? "Change Image" : "Upload Image"}
                          onUploaded={(res: any) => updateSection(idx, { image: res?.secure_url })}
                        />
                        {sec.image && (
                          <button type="button" className="px-3 py-1 rounded border" onClick={() => updateSection(idx, { image: "" })}>Remove</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50">{editing ? "Update" : "Add"}</button>
            {editing && <button type="button" className="px-4 py-2 rounded border" onClick={resetForm}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">Blog Posts</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No blog posts.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div className="space-y-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-700">By {item.author} {item.minute_read ? `• ${item.minute_read} min` : ""}</p>
                  {item.tags && item.tags.length > 0 && (
                    <p className="text-xs text-gray-600">Tags: {item.tags.join(", ")}</p>
                  )}
                  {item.sections && item.sections.length > 0 && (
                    <div className="text-xs text-gray-700">
                      <p className="font-medium">Sections:</p>
                      <ul className="list-disc pl-5">
                        {item.sections.slice(0, 3).map((s, i) => (
                          <li key={i}>{s.heading || "(no heading)"}</li>
                        ))}
                        {item.sections.length > 3 && <li>and {item.sections.length - 3} more…</li>}
                      </ul>
                    </div>
                  )}
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