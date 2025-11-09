"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { ServiceItem, ServiceSection, ServiceTechnology } from "@/lib/admin/types";
import { listServices, addService, updateService, deleteService } from "@/lib/admin/firestore";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";

type ServiceFormState = {
  service_title: string;
  description?: string;
  services_subtitle?: string;
  service_subdescription?: string;
  cover_image?: string;
  technologies: ServiceTechnology[];
  sections: ServiceSection[];
};

export default function AdminServicesPage() {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<ServiceItem | null>(null);
  const [form, setForm] = useState<ServiceFormState>({
    service_title: "",
    description: "",
    services_subtitle: "",
    service_subdescription: "",
    cover_image: "",
    technologies: [],
    sections: [],
  });

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listServices();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const resetForm = () => {
    setForm({ service_title: "", description: "", services_subtitle: "", service_subdescription: "", cover_image: "", technologies: [], sections: [] });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service_title) {
      toast.error("Service title is required");
      return;
    }
    setBusy(true);
    try {
      const payload: Omit<ServiceItem, "id"> = {
        service_title: form.service_title,
        description: form.description,
        services_subtitle: form.services_subtitle,
        service_subdescription: form.service_subdescription,
        cover_image: form.cover_image,
        technologies: form.technologies,
        sections: form.sections,
      };
      if (editing?.id) {
        await updateService(editing.id, payload);
        toast.success("Service updated");
      } else {
        await addService(payload);
        toast.success("Service added");
      }
      resetForm();
      await refresh();
    } catch (e) {
      toast.error("Failed to save service");
    } finally {
      setBusy(false);
    }
  };

  const onEdit = (item: ServiceItem) => {
    setEditing(item);
    setForm({
      service_title: item.service_title || "",
      description: item.description || "",
      services_subtitle: item.services_subtitle || "",
      service_subdescription: item.service_subdescription || "",
      cover_image: item.cover_image || "",
      technologies: item.technologies || [],
      sections: item.sections || [],
    });
  };

  const onDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this service?")) return;
    setBusy(true);
    try {
      await deleteService(id);
      toast.success("Service deleted");
      await refresh();
    } catch (e) {
      toast.error("Failed to delete service");
    } finally {
      setBusy(false);
    }
  };

  const updateSection = (index: number, next: Partial<ServiceSection>) => {
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

  const updateTechnology = (index: number, next: Partial<ServiceTechnology>) => {
    setForm((f) => {
      const technologies = [...f.technologies];
      technologies[index] = { ...technologies[index], ...next };
      return { ...f, technologies };
    });
  };

  const addTechnology = () => {
    setForm((f) => ({ ...f, technologies: [...f.technologies, { name: "", icon: "" }] }));
  };

  const removeTechnology = (index: number) => {
    setForm((f) => ({ ...f, technologies: f.technologies.filter((_, i) => i !== index) }));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Services</h2>
      <p className="text-sm text-gray-600">Create and manage services with technologies and sections.</p>

      <div className="rounded border bg-white p-4">
        <h3 className="font-medium mb-3">{editing ? "Edit Service" : "Add Service"}</h3>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Service Title</label>
            <input className="w-full rounded border px-3 py-2" value={form.service_title} onChange={(e) => setForm((f) => ({ ...f, service_title: e.target.value }))} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Subtitle (optional)</label>
              <input className="w-full rounded border px-3 py-2" value={form.services_subtitle ?? ""} onChange={(e) => setForm((f) => ({ ...f, services_subtitle: e.target.value }))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Short Description (optional)</label>
              <input className="w-full rounded border px-3 py-2" value={form.service_subdescription ?? ""} onChange={(e) => setForm((f) => ({ ...f, service_subdescription: e.target.value }))} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description (optional)</label>
            <textarea className="w-full rounded border px-3 py-2 h-28" value={form.description ?? ""} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
          </div>

          {/* Technologies */}
          <div className="border rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Technologies</h4>
              <button type="button" className="px-3 py-1 rounded border" onClick={addTechnology}>Add Technology</button>
            </div>
            {form.technologies.length === 0 ? (
              <p className="text-sm text-gray-600">No technologies added.</p>
            ) : (
              <div className="space-y-3">
                {form.technologies.map((tech, idx) => (
                  <div key={`tech-${idx}`} className="rounded border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-700">Technology {idx + 1}</p>
                      <button type="button" className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => removeTechnology(idx)}>Remove</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input className="w-full rounded border px-3 py-2" value={tech.name} onChange={(e) => updateTechnology(idx, { name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Icon (optional)</label>
                        <div className="flex items-center gap-3">
                          {tech.icon ? (
                            <img src={tech.icon} alt={`tech-${idx + 1}`} className="h-10 w-10 rounded border object-cover" />
                          ) : null}
                          <CloudinaryUpload
                            accept="image/*"
                            buttonText={tech.icon ? "Change Icon" : "Upload Icon"}
                            onUploaded={(res: any) => updateTechnology(idx, { icon: res?.secure_url })}
                          />
                          {tech.icon && (
                            <button type="button" className="px-3 py-1 rounded border" onClick={() => updateTechnology(idx, { icon: "" })}>Remove</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sections */}
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
                  <div key={`sec-${idx}`} className="rounded border p-3">
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
        <h3 className="font-medium mb-3">Services</h3>
        {loading ? (
          <p className="text-sm text-gray-600">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-sm text-gray-600">No services.</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3 border rounded p-3">
                <div className="space-y-1">
                  <p className="font-medium">{item.service_title}</p>
                  {item.services_subtitle && <p className="text-sm text-gray-700">{item.services_subtitle}</p>}
                  {item.technologies && item.technologies.length > 0 && (
                    <p className="text-xs text-gray-600">Tech: {item.technologies.map((t) => t.name).join(", ")}</p>
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