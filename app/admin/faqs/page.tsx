"use client";
import { useEffect, useState } from "react";
import { addFaq, deleteFaq, listFaqs, updateFaq } from "@/lib/admin/firestore";
import type { Faq } from "@/lib/admin/types";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import router from "next/router";

type Editing = { id: string; question: string; answer: string } | null;

export default function AdminFaqPage() {
  const [items, setItems] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ question: "", answer: "" });
  const [editing, setEditing] = useState<Editing>(null);

  async function refresh() {
    setLoading(true);
    try {
      const list = await listFaqs();
      setItems(list);
    } catch (e) {
      console.error(e);
      toast.error("Failed to load FAQs.", { toastId: "faq-load-error" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newItem.question.trim() || !newItem.answer.trim()) {
      toast.error("Question and answer are required.", { toastId: "faq-add-invalid" });
      return;
    }
    setLoading(true);
    try {
      await addFaq({ question: newItem.question.trim(), answer: newItem.answer.trim() });
      setNewItem({ question: "", answer: "" });
      toast.success("FAQ added.", { toastId: "faq-add-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to add FAQ.", { toastId: "faq-add-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onUpdate(e: React.MouseEvent) {
    e.preventDefault();
    if (!editing) return;
    const { id, question, answer } = editing;
    if (!question.trim() || !answer.trim()) {
      toast.error("Question and answer are required.", { toastId: "faq-update-invalid" });
      return;
    }
    setLoading(true);
    try {
      await updateFaq(id, { question: question.trim(), answer: answer.trim() });
      setEditing(null);
      toast.success("FAQ updated.", { toastId: "faq-update-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to update FAQ.", { toastId: "faq-update-error" });
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this FAQ?")) return;
    setLoading(true);
    try {
      await deleteFaq(id);
      toast.success("FAQ deleted.", { toastId: "faq-delete-success" });
      await refresh();
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete FAQ.", { toastId: "faq-delete-error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <span onClick={() => router.back()} className="cursor-pointer">
          <FaArrowLeft className="inline-block h-5 w-5 text-gray-500" />
        </span>
        <h2 className="text-xl font-semibold">Admin: FAQ</h2>
      </div>

      <form onSubmit={onAdd} className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">Add Q/A</h3>
        <div>
          <label className="block text-sm font-medium">Question</label>
          <input
            type="text"
            className="mt-1 w-full rounded border px-3 py-2"
            value={newItem.question}
            onChange={(e) => setNewItem((s) => ({ ...s, question: e.target.value }))}
            placeholder="Enter question"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Answer</label>
          <textarea
            className="mt-1 w-full rounded border px-3 py-2"
            value={newItem.answer}
            onChange={(e) => setNewItem((s) => ({ ...s, answer: e.target.value }))}
            placeholder="Enter answer"
            rows={3}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add FAQ"}
        </button>
      </form>

      <div className="rounded border bg-white p-4 space-y-3">
        <h3 className="font-medium">FAQs</h3>
        {loading && <p className="text-sm text-gray-600">Loading...</p>}
        {!loading && items.length === 0 && (
          <p className="text-sm text-gray-600">No FAQs yet.</p>
        )}
        <ul className="divide-y">
          {items.map((item) => (
            <li key={item.id} className="py-3">
              {editing?.id === item.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    className="w-full rounded border px-3 py-2"
                    value={editing?.question ?? ""}
                    onChange={(e) => setEditing((s) => (s ? { ...s, question: e.target.value } : s))}
                  />
                  <textarea
                    className="w-full rounded border px-3 py-2"
                    rows={3}
                    value={editing?.answer ?? ""}
                    onChange={(e) => setEditing((s) => (s ? { ...s, answer: e.target.value } : s))}
                  />
                  <div className="flex gap-2">
                    <button onClick={onUpdate} className="rounded bg-blue-600 px-3 py-1 text-white">Save</button>
                    <button onClick={() => setEditing(null)} className="rounded bg-gray-200 px-3 py-1">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{item.question}</p>
                    <p className="text-sm text-gray-700">{item.answer}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing({ id: item.id!, question: item.question, answer: item.answer })}
                      className="rounded bg-gray-200 px-3 py-1"
                    >
                      Edit
                    </button>
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