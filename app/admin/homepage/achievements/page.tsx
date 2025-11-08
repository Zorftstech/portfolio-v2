"use client";
import { useEffect, useState } from "react";
import { getAchievements, saveAchievements } from "@/lib/admin/firestore";
import type { Achievements } from "@/lib/admin/types";
import { toast } from "react-toastify";

const initialState: Achievements = {
  founded_date: "",
  no_of_projects: 0,
  no_of_staffs: 0,
  no_of_clients: 0,
};

export default function AdminAchievementsPage() {
  const [form, setForm] = useState<Achievements>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAchievements();
        if (data) setForm({ ...initialState, ...data });
      } catch (e) {
        console.error(e);
        toast.error("Failed to load achievements.", { toastId: "achievements-load-error" });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await saveAchievements(form);
      toast.success("Achievements saved successfully.", { toastId: "achievements-save-success" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to save achievements.", { toastId: "achievements-save-error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Homepage: Achievements</h2>
      <form onSubmit={onSubmit} className="rounded border bg-white p-4 space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Founded Date</label>
          <input
            type="text"
            className="mt-1 w-full rounded border px-3 py-2"
            value={form.founded_date ?? ""}
            onChange={(e) => setForm((s) => ({ ...s, founded_date: e.target.value }))}
            placeholder="e.g., 2018"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">No. of Projects</label>
            <input
              type="number"
              className="mt-1 w-full rounded border px-3 py-2"
              value={form.no_of_projects ?? 0}
              onChange={(e) => setForm((s) => ({ ...s, no_of_projects: Number(e.target.value) }))}
              min={0}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">No. of Staffs</label>
            <input
              type="number"
              className="mt-1 w-full rounded border px-3 py-2"
              value={form.no_of_staffs ?? 0}
              onChange={(e) => setForm((s) => ({ ...s, no_of_staffs: Number(e.target.value) }))}
              min={0}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">No. of Clients</label>
            <input
              type="number"
              className="mt-1 w-full rounded border px-3 py-2"
              value={form.no_of_clients ?? 0}
              onChange={(e) => setForm((s) => ({ ...s, no_of_clients: Number(e.target.value) }))}
              min={0}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </section>
  );
}