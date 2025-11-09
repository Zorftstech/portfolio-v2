# API Integrations

This document catalogs all API integrations used across the application, including endpoints, methods, payloads, and where they are invoked. The base URL for all requests is defined by `NEXT_PUBLIC_BASE_URL`.

## Base Configuration
- Base URL: `process.env.NEXT_PUBLIC_BASE_URL`
- HTTP client: `axios` via `lib/apis/request.ts`
- Notifications: `react-toastify` for success/error toasts

## Global Fetches (Layout)
- Component: `lib/apis/layoutRequest.tsx`
- Purpose: Hydrates global store on app mount
- Endpoints:
  - `GET /brand-partners/` → `setPartners(res.data.results)`
  - `GET /projects/` → `setProjects(res.data.results)`
  - `GET /services` → `setServices(res.data.results)`
  - `GET /stacks-with-technologies` → `setTechnologies(res.data.results)`
  - `GET /blog/` → `setBlogs(res.data.results)`

## Homepage (`app/page.tsx`)
- AchievementsSection (`components/home/achievements.tsx`)
  - `GET /company-data-statistcs/`
  - Displays: `founded_date` (year extracted), `no_of_projects`, `no_of_staffs`, `no_of_clients`
- PartnersSection (`components/home/partners.tsx`)
  - Uses global `partners` from store (populated by `GET /brand-partners/`)
  - Displays: `id`, `brand_name`, `logo`
- ServicesSection (`components/home/services.tsx`)
  - Uses global `services` from store (populated by `GET /services`)
  - Displays: `id`, `main_title`, `main_description`, `name`
- PortfolioSection (`components/home/portfolio.tsx`)
  - Uses global `projects` from store (populated by `GET /projects/`)
  - Displays: project cards in `PortfolioGrid`
- WhyChooseUs (`components/home/whyChooseUs.tsx`)
  - `GET /why-choose-zorfts/`
  - Displays: `id`, `subject`, `description`
- Testimonials (`components/home/testimonials.tsx` → `components/home/testimonialCard.tsx`)
  - `GET /testimonials/`
  - Displays: `image`, `name`, `comment`
- FAQ (`components/shared/faq.tsx`)
  - `GET /faq/`
  - Displays: `id`, `question`, `answer`

## About (`app/about/page.tsx`)
- MeetTheTeam (`components/about/meetTheTeam.tsx`)
  - `GET /auth/meet-the-team/`
  - Displays: `id`, `first_name`, `last_name`, `role`, `profile_picture`
- ServicesSection
  - Uses global `services` from store

## Partners (`app/partners/page.tsx`)
- WhatOurPartnersSaid (`components/partners/whatOurPartnersSaid.tsx`)
  - `GET /testimonials-brandpartners/`
  - Displays: `image`, `name`, `comment` (from `data.testimonials`)

## Careers
- Careers list (`app/careers/page.tsx` → `components/careers/bepartOfOurTeam.tsx`)
  - `GET /careers/`
  - Displays: `id`, `job_title`, `description`
- Career detail (`app/careers/[department]/page.tsx` → `components/careerChoice/index.tsx`)
  - `GET /careers/{id}` via `fetchSingleCareerOpenings(id)`
  - Displays full opening details; handles not-found state
- Job application form (`components/careerChoice/jobApplication.tsx`)
  - Endpoint: `POST /job-application/`
  - Content-Type: `multipart/form-data`
  - Required fields:
    - `id` (string) — opening ID
    - `title` (string) — job title
    - `first_name` (string)
    - `last_name` (string)
    - `email` (string)
    - `phone_number` (string)
    - `country` (string)
    - `address` (string)
    - `gender` (string)
    - `resume` (File)
    - `cover_letter` (File)
    - `additional_attachment` (File)
  - Behavior: On success, shows toast "Application successful" and navigates back to department page

## Contact (`app/contact/page.tsx`)
- Contact form (`components/contact/Form.tsx`)
  - Endpoint: `POST /api/send` (Next.js route)
  - Payload (JSON):
    - `type`: `"contact"`
    - `subject` (string)
    - `email` (string)
    - `message` (string)
  - Behavior: On success, shows toast "Message sent successfully"
  - Side effects:
    - Sends acknowledgment email via Resend using `components/email/ContactMessageReceived.tsx`
    - Logs message to Firestore collection `contactMessages`
- Testimonials section reused (see Homepage)

## Portfolio
- Single Project (`app/portfolio/[name]/page.tsx` → `components/portfolio-v2/index.tsx`)
  - `GET /projects/{id}` via `fetchSingleProject(id)`
  - Displays detailed project information across multiple subcomponents
- Portfolio list (`app/portfolio/page.tsx`)
  - Uses static UI components; cards typically rely on global `projects` store

## Blog
- Blog list (`app/blog/page.tsx` → `components/blog/blogContainer.tsx`)
  - Uses global `blogs` from store (populated by `GET /blog/`)
- Single Blog (`app/blog/[id]/page.tsx` → `components/blogDetails/index.tsx`)
  - `GET /blog/{id}` via `fetchSingleBlogPost(id)`
  - Displays: `id`, `title`, `author`, `content`, `minute_read`, `created_at`, `updated_at`, `tags[]`, `cover_image`, `sections[]`

### Admin: Blog CRUD
- Admin page: `app/admin/blog/page.tsx`
- Firestore collection: `blogs`
- Admin helpers (`lib/admin/firestore.ts`):
  - `listBlogs()` — lists all blogs
  - `addBlog(post)` — adds a blog
  - `updateBlog(id, post)` — updates a blog
  - `deleteBlog(id)` — deletes a blog
- Types (`lib/admin/types.ts`):
  - `BlogPost` — `{ id?, title, author, content?, minute_read?, tags?, cover_image?, sections?, created_at?, updated_at? }`
  - `BlogSection` — `{ heading, paragraph }`
- Admin UI capabilities:
  - Create/edit blog metadata (title, author, minutes, tags, cover image)
  - Optional root `content`
  - Manage structured `sections` (add/remove, edit heading and paragraph)
  - Delete blog entries

## Talents
- Talents list (`app/talents/page.tsx` → `components/talents/talentsCard.tsx`)
  - `GET /talents`
  - Displays: `image`, `job_title`, `name`, `description`
- Talent profile (`app/talents/[id]/page.tsx` → `components/talentsProfile/index.tsx`)
  - Uses local static data for profile; does not call API

## Services
- Service detail (`app/services/[id]/page.tsx` → `components/services/index.tsx`)
  - `GET /services/{id}` via `fetchSingleService(id)`
  - Displays service details; handles not-found state

## Newsletter (Footer)
- Newsletter subscription (`components/footer.tsx`)
  - Endpoint: `POST /api/send` (Next.js route)
  - Payload (JSON): `{ type: "newsletter", email: string }`
  - Behavior: On success, toast "Subscription successful"
  - Side effects:
    - Sends welcome email via Resend using `components/email/NewsletterWelcome.tsx`
    - Logs subscriber to Firestore collection `newsletterSubscribers`

## Endpoint Reference (`lib/apis/request.ts`)
- `GET /auth/meet-the-team/` → `fetchTeamMembers`
- `GET /brand-partners/` → `fetchPartners`
- `GET /faq/` → `fetchFaq`
- `GET /testimonials/` → `fetchTestimonials`
- `GET /testimonials-brandpartners/` → `fetchPartnersTestimonials`
- `GET /blog/` → `fetchBlogPosts`
- `GET /blog/{id}` → `fetchSingleBlogPost`
- `GET /company-data-statistcs/` → `fetchDataStatistics`
- `GET /projects/` → `fetchProjects`
- `GET /projects/{id}` → `fetchSingleProject`
- `GET /why-choose-zorfts/` → `fetchWhyChooseZorfts`
- `GET /services` → `fetchServices`
- `GET /services/{id}` → `fetchSingleService`
- `GET /careers/` → `fetchCareerOpenings`
- `GET /careers/{id}` → `fetchSingleCareerOpenings`
- `GET /stacks-with-technologies` → `fetchTechnologies`
- `GET /talents` → `fetchTalents`
- `GET /talents/{id}` → `fetchSingleTalent`
- `POST /api/send` (JSON) → `sendContactMessage` (type: `"contact"`)
- `POST /job-application/` (multipart/form-data) → `sendJobForm`
- `POST /api/send` (JSON) → `sendNewsLetter` (type: `"newsletter"`)

---

## Cloudinary (Client-side Uploads)

While `lib/cloudinary.ts` configures server-side usage, client-side uploads should use unsigned upload presets. See `lib/cloudinaryClient.ts` and `components/shared/CloudinaryUpload.tsx`.

### Required Environment Variables
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — your Cloudinary cloud name
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` — unsigned upload preset name

### Client Upload Helper
- Import: `import { uploadToCloudinaryClient } from "@/lib/cloudinaryClient"`
- Usage:
  ```ts
  const result = await uploadToCloudinaryClient(file, { folder: "uploads", tags: ["portfolio"] });
  console.log(result.secure_url);
  ```

### Sample UI Component
- See `components/shared/CloudinaryUpload.tsx`
- Props: `onUploaded?: (result) => void`, `accept?: string`, `buttonText?: string`
- Renders a file input and triggers upload, returning `secure_url` and other metadata

---

## Resend (Email Notifications)

Sends acknowledgment emails for job applications, contact messages, and newsletter subscriptions.

### Required Environment Variables
- `RESEND_API_KEY` — server-side API key for Resend

### API Route
- File: `app/api/send/route.ts`
- Method: `POST`
- Payloads (JSON):
  - Job application: `{ email, first_name, title }`
  - Contact: `{ type: "contact", email, subject, message }`
  - Newsletter: `{ type: "newsletter", email }`
- Behavior:
  - Job application → `components/email/JobApplicationReceived.tsx`
  - Contact → `components/email/ContactMessageReceived.tsx` and logs to `contactMessages`
  - Newsletter → `components/email/NewsletterWelcome.tsx` and logs to `newsletterSubscribers`

### Client Integration
- Job application: `components/careerChoice/jobApplication.tsx`
  - On successful `POST /job-application/`, triggers `POST /api/send` to email the applicant.
- Contact: `components/contact/Form.tsx`
  - Submits directly to `POST /api/send` (type: contact) and displays success toast.
- Newsletter: `components/footer.tsx`
  - Submits directly to `POST /api/send` (type: newsletter) and displays success toast.