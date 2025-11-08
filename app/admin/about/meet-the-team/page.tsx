"use client";
import { useEffect, useState } from "react";
import { addTeamMember, deleteTeamMember, listTeamMembers, updateTeamMember } from "@/lib/admin/firestore";
import type { TeamMember } from "@/lib/admin/types";
import CloudinaryUpload from "@/components/shared/CloudinaryUpload";
import type { CloudinaryUploadResult } from "@/lib/cloudinaryClient";
import { toast } from "react-toastify";

type Editing = { id: string; first_name: string; last_name: string; role: string; profile_picture_url?: string } | null;

export default function AdminMeetTheTeamPage() {
  const [items, setItems] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState<{ first_name: string; last_name: string; role: string; profile_picture_url?: string }>({ first_name: "", last_name: "", role: "" });
  const [editing, setEditing] = useState<Editing>(null);

  async function refresh() {
    setLoading(true);
    try {
      const list = await listTeamMembers();
      setItems(list);
    } catch (e) {
      console.error(e);
      toast.error("Failed to load team members.", { toastId: "team-load-error" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newItem.first_name.trim() || !newItem.last_name.trim() || !newItem.role.trim()) {
      toast.error("First name, last name, and role are required.", { toastId: "team-add-invalid" });
      return;
    }
    setLoading(true);
    try {
      await addTeamMember({ first_name: newItem.first_name.trim(), last_name: newItem.last_name.trim(), role: newItem.role.trim(), profile_picture_url: newItem.profile_picture_url });
      setNewItem({ first_name: "", last_name: "", role: "" });
      toast.success("Team member added.", { toastId: "team-add-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to add team member.", { toastId: "team-add-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate(e: React.MouseEvent) {
    e.preventDefault();
    if (!editing) return;
    const { id, first_name, last_name, role, profile_picture_url } = editing;
    if (!first_name.trim() || !last_name.trim() || !role.trim()) {
      toast.error("First name, last name, and role are required.", { toastId: "team-update-invalid" });
      return;
    }
    setLoading(true);
    try {
      await updateTeamMember(id, { first_name: first_name.trim(), last_name: last_name.trim(), role: role.trim(), profile_picture_url });
      setEditing(null);
      toast.success("Team member updated.", { toastId: "team-update-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to update team member.", { toastId: "team-update-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this team member?")) return;
    setLoading(true);
    try {
      await deleteTeamMember(id);
      toast.success("Team member deleted.", { toastId: "team-delete-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete team member.", { toastId: "team-delete-error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">About: Meet The Team</h2>

      <form onSubmit={onAdd} className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">Add Team Member</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.first_name}
              onChange={(e) => setNewItem((s) => ({ ...s, first_name: e.target.value }))}
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.last_name}
              onChange={(e) => setNewItem((s) => ({ ...s, last_name: e.target.value }))}
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Role</label>
            <input
              type="text"
              className="mt-1 w-full rounded border px-3 py-2"
              value={newItem.role}
              onChange={(e) => setNewItem((s) => ({ ...s, role: e.target.value }))}
              placeholder="Role"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Profile Picture</label>
            <div className="mt-2">
              <CloudinaryUpload
                onUploaded={(res: CloudinaryUploadResult) =>
                  setNewItem((s) => ({ ...s, profile_picture_url: res.secure_url }))
                }
                buttonText={"Upload Picture"}
                accept="image/*"
              />
              {newItem.profile_picture_url && (
                <p className="mt-2 text-xs text-gray-600">Uploaded: {newItem.profile_picture_url}</p>
              )}
            </div>
          </div>
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
        <h3 className="font-medium">Team Members</h3>
        {loading && <p className="text-sm text-gray-600">Loading...</p>}
        {!loading && items.length === 0 && (
          <p className="text-sm text-gray-600">No team members yet.</p>
        )}
        <ul className="divide-y">
          {items.map((item) => (
            <li key={item.id} className="py-3">
              {editing?.id === item.id ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full rounded border px-3 py-2"
                      value={editing?.first_name ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, first_name: e.target.value } : s))}
                    />
                    <input
                      type="text"
                      className="w-full rounded border px-3 py-2"
                      value={editing?.last_name ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, last_name: e.target.value } : s))}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full rounded border px-3 py-2"
                      value={editing?.role ?? ""}
                      onChange={(e) => setEditing((s) => (s ? { ...s, role: e.target.value } : s))}
                    />
                    <CloudinaryUpload
                      onUploaded={(res: CloudinaryUploadResult) =>
                        setEditing((s) => (s ? { ...s, profile_picture_url: res.secure_url } : s))
                      }
                      buttonText={"Change Picture"}
                      accept="image/*"
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
                    <p className="font-medium">{item.first_name} {item.last_name}</p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                    {item.profile_picture_url && (
                      <p className="text-xs text-gray-500">Picture: {item.profile_picture_url}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setEditing({ id: item.id!, first_name: item.first_name, last_name: item.last_name, role: item.role, profile_picture_url: item.profile_picture_url })} className="rounded bg-gray-200 px-3 py-1">Edit</button>
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