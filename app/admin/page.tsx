import Link from "next/link";

export default function AdminDashboard() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>
      <p className="text-sm text-gray-600">Manage site content for the layout and homepage.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Homepage</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/homepage/achievements">Achievements</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="/admin/homepage/why-choose-us">Why Choose Us</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="/admin/homepage/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Layout</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/layout/partners">Partners</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="/admin/partners/what-our-partners-said">Partners&apos; Testimonials</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Shared</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/faqs">FAQ</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">About</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/about/meet-the-team">Meet The Team</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Careers</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/careers">Manage Openings</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Contact</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/contact">Messages</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Newsletter</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/newsletter">Subscribers</Link></li>
          </ul>
        </div>
        <div className="rounded border bg-white p-4">
          <h3 className="font-medium">Blog</h3>
          <ul className="mt-2 list-disc pl-5 text-sm">
            <li><Link className="text-blue-600 hover:underline" href="/admin/blog">Manage Blogs</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}