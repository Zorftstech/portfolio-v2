import Link from "next/link";
import React from "react";
import AuthGate from "@/components/admin/AuthGate";

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
            <Link href="/admin/partners/what-our-partners-said" className="hover:underline">Partners: Testimonials</Link>
            <Link href="/admin/about/meet-the-team" className="hover:underline">About: Meet The Team</Link>
            <Link href="/admin/careers" className="hover:underline">Careers</Link>
            <Link href="/admin/contact" className="hover:underline">Contact</Link>
            <Link href="/admin/newsletter" className="hover:underline">Newsletter</Link>
            <Link href="/admin/blog" className="hover:underline">Blog</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6 my-6">
        <AuthGate>
          {children}
        </AuthGate>
      </main>
    </div>
  );
}