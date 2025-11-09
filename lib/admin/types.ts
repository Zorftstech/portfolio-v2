export type Achievements = {
  founded_date?: string;
  no_of_projects?: number;
  no_of_staffs?: number;
  no_of_clients?: number;
  updated_at?: number;
};

export type WhyChooseUsReason = {
  id?: string;
  subject: string;
  description: string;
  created_at?: number;
};

export type Partner = {
  id?: string;
  name: string;
  logo_url: string;
  website_url?: string;
  created_at?: number;
};

export type Faq = {
  id?: string;
  question: string;
  answer: string;
  created_at?: number;
};

export type Testimonial = {
  id?: string;
  name: string;
  comment: string;
  avatar_url?: string;
  created_at?: number;
};

export type TeamMember = {
  id?: string;
  first_name: string;
  last_name: string;
  role: string;
  profile_picture_url?: string;
  created_at?: number;
};

export type PartnerTestimonial = {
  id?: string;
  name: string;
  comment: string;
  avatar_url?: string;
  created_at?: number;
};

export type CareerOpening = {
  id?: string;
  job_title: string;
  description: string;
  created_at?: number;
};

export type ContactMessage = {
  id?: string;
  subject: string;
  email: string;
  message: string;
  created_at?: number;
};

export type NewsletterSubscriber = {
  id?: string;
  email: string;
  created_at?: number;
};

// Blog types with structured sections
export type BlogSection = {
  heading: string;
  paragraph: string;
  image?: string; // optional image per section
};

export type BlogPost = {
  id?: string;
  title: string;
  author: string;
  content?: string; // optional root content; detailed content lives in sections
  minute_read?: number;
  tags?: string[];
  cover_image?: string;
  sections?: BlogSection[];
  created_at?: number;
  updated_at?: number;
};