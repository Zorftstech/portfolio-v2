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