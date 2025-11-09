"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { PortfolioProject, PortfolioSection } from "@/lib/admin/types";
import { listProjects, addProject, updateProject, deleteProject } from "@/lib/admin/firestore";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";

type ProjectFormState = {
  project_title: string;
  description?: string;
  company_name?: string;
  project_url?: string;
  cover_image?: string;
  stack: string; // comma separated
  timeline?: string;
  date?: string;
  sections: PortfolioSection[];
  results: PortfolioSection[];
};

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<PortfolioProject | null>(null);
  const [form, setForm] = useState<ProjectFormState>({
    project_title: "",
    description: "",
    company_name: "",
    project_url: "",
    cover_image: "",
    stack: "",
    timeline: "",
    date: "",
    sections: [],
    results: [],
  });

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listProjects();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setForm({ project_title: "", description: "", company_name: "", project_url: "", cover_image: "", stack: "", timeline: "", date: "", sections: [], results: [] });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.project_title) {
      toast.error("Project title is required");
      return;
    }
    setBusy(true);
    try {
      const payload: Omit<PortfolioProject, "id"> = {
        project_title: form.project_title,
        description: form.description,
        company_name: form.company_name,
        project_url: form.project_url,
        cover_image: form.cover_image,
        stack: form.stack ? form.stack.split(",").map((t) => t.trim()).filter(Boolean) : [],
        timeline: form.timeline,
        date: form.date,
        sections: form.sections,
        results: form.results,
      };
      if (editing?.id) {
        await updateProject(editing.id, payload);
        toast.success("Project updated");
      } else {
        await addProject(payload);
        toast.success("Project added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save project");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: PortfolioProject) => {
    setEditing(item);
    setForm({
      project_title: item.project_title || "",
      description: item.description || "",
      company_name: item.company_name || "",
      project_url: item.project_url || "",
      cover_image: item.cover_image || "",
      stack: item.stack?.join(", ") || "",
      timeline: item.timeline || "",
      date: item.date || "",
      sections: item.sections || [],
      results: item.results || [],
    });
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this project?")) return;
    setBusy(true);
    try {
      await deleteProject(id);
      toast.success("Project deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete project");
    } finally {
      setBusy(false);
    }
  };

  const updateSection = (key: "sections" | "results", index: number, next: Partial<PortfolioSection>) => {
    setForm((f) => {
      const arr = [...(key === "sections" ? f.sections : f.results)];
      arr[index] = { ...arr[index], ...next };
      return { ...f, [key]: arr } as ProjectFormState;
    });
  };

  const addSection = (key: "sections" | "results") => {
    setForm((f) => ({ ...f, [key]: [...(key === "sections" ? f.sections : f.results), { heading: "", paragraph: "" }] }));
  };

  const removeSection = (key: "sections" | "results", index: number) => {
    setForm((f) => ({ ...f, [key]: (key === "sections" ? f.sections : f.results).filter((_, i) => i !== index) }));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Portfolio</h2>
      <p className="text-sm text-gray-600">Create and manage portfolio projects with sections and results.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Project" : "Add Project"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Project Title</label>
            <input className="w-full rounded border px-3 py-2" value={form.project_title} onChange={(e) => setForm((f) => ({ ...f, project_title: e.target.value }))} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input className="w-full rounded border px-3 py-2" value={form.company_name ?? ""} onChange={(e) => setForm((f) => ({ ...f, company_name: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project URL</label>
              <input className="w-full rounded border px-3 py-2" value={form.project_url ?? ""} onChange={(e) => setForm((f) => ({ ...f, project_url: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Stack (comma separated)</label>
              <input className="w-full rounded border px-3 py-2" value={form.stack} onChange={(e) => setForm((f) => ({ ...f, stack: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <input className="w-full rounded border px-3 py-2" value={form.timeline ?? ""} onChange={(e) => setForm((f) => ({ ...f, timeline: e.target.value }))} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Date (optional)</label>
              <input type="date" className="w-full rounded border px-3 py-2" value={form.date ?? ""} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
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
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description (optional)</label>
            <textarea className="w-full rounded border px-3 py-2 h-28" value={form.description ?? ""} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
          </div>

          {/* Sections */}
          <div className="border rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Sections</h4>
              <button type="button" className="px-3 py-1 rounded border" onClick={() => addSection("sections")}>Add Section</button>
            </div>
            {form.sections.length === 0 ? (
              <p className="text-sm text-gray-600">No sections added.</p>
            ) : (
              <div className="space-y-3">
                {form.sections.map((sec, idx) => (
                  <div key={`sec-${idx}`} className="rounded border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-700">Section {idx + 1}</p>
                      <button type="button" className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => removeSection("sections", idx)}>Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Heading</label>
                        <input className="w-full rounded border px-3 py-2" value={sec.heading} onChange={(e) => updateSection("sections", idx, { heading: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Paragraph</label>
                        <textarea className="w-full rounded border px-3 py-2 h-24" value={sec.paragraph} onChange={(e) => updateSection("sections", idx, { paragraph: e.target.value })} />
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
                          onUploaded={(res: any) => updateSection("sections", idx, { image: res?.secure_url })}
                        />
                        {sec.image && (
                          <button type="button" className="px-3 py-1 rounded border" onClick={() => updateSection("sections", idx, { image: "" })}>Remove</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="border rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Results</h4>
              <button type="button" className="px-3 py-1 rounded border" onClick={() => addSection("results")}>Add Result</button>
            </div>
            {form.results.length === 0 ? (
              <p className="text-sm text-gray-600">No results added.</p>
            ) : (
              <div className="space-y-3">
                {form.results.map((sec, idx) => (
                  <div key={`res-${idx}`} className="rounded border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-700">Result {idx + 1}</p>
                      <button type="button" className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => removeSection("results", idx)}>Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Heading</label>
                        <input className="w-full rounded border px-3 py-2" value={sec.heading} onChange={(e) => updateSection("results", idx, { heading: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Paragraph</label>
                        <textarea className="w-full rounded border px-3 py-2 h-24" value={sec.paragraph} onChange={(e) => updateSection("results", idx, { paragraph: e.target.value })} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm font-medium mb-1">Image (optional)</label>
                      <div className="flex items-center gap-3">
                        {sec.image ? (
                          <img src={sec.image} alt={`result-${idx + 1}`} className="h-14 w-14 rounded border object-cover" />
                        ) : null}
                        <CloudinaryUpload
                          accept="image/*"
                          buttonText={sec.image ? "Change Image" : "Upload Image"}
                          onUploaded={(res: any) => updateSection("results", idx, { image: res?.secure_url })}
                        />
                        {sec.image && (
                          <button type="button" className="px-3 py-1 rounded border" onClick={() => updateSection("results", idx, { image: "" })}>Remove</button>
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
        <h3 className="font-medium mb-3">Projects</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No projects.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div className="space-y-1">
                  <p className="font-medium">{item.project_title}</p>
                  {item.company_name && <p className="text-sm text-gray-700">{item.company_name}</p>}
                  {item.stack && item.stack.length > 0 && (
                    <p className="text-xs text-gray-600">Stack: {item.stack.join(", ")}</p>
                  )}
                  {item.sections && item.sections.length > 0 && (
                    <div className="text-xs text-gray-700">
                      <p className="font-medium">Sections:</p>
                      <ul className="list-disc pl-4">
                        {item.sections.map((s, i) => (
                          <li key={`s-${i}`}>{s.heading || `Section ${i + 1}`}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.results && item.results.length > 0 && (
                    <div className="text-xs text-gray-700">
                      <p className="font-medium">Results:</p>
                      <ul className="list-disc pl-4">
                        {item.results.map((s, i) => (
                          <li key={`r-${i}`}>{s.heading || `Result ${i + 1}`}</li>
                        ))}
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