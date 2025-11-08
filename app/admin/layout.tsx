import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/admin" className="hover:underline">Dashboard</Link>
            <Link href="/admin/homepage/achievements" className="hover:underline">Homepage: Achievements</Link>
            <Link href="/admin/homepage/why-choose-us" className="hover:underline">Homepage: Why Choose Us</Link>
            <Link href="/admin/layout/partners" className="hover:underline">Layout: Partners</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}