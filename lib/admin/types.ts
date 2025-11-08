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