export interface IContactData {
  subject: string;
  email: string;
  message: string;
}

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IDataStatistics {
  founded_date: string;
  no_of_clients: number;
  no_of_projects: number;
  no_of_staffs: number;
}

export interface IWhyChoseUseData {
  id: number;
  subject: string;
  description: string;
}

// export interface

export interface IProjectData {
  id: number;
  tags: {
    id: number;
    name: string;
    description: string;
  }[];

  related_services: {
    id: number;
    name: string;
    description: string;
    is_subservice: boolean;
    image: null | string;
    created_at: string;
    link: null | string;
    parent_service: null | string;
  }[];
  brand_name: string;
  project_name: string;
  sub_text: string;
  company_type: null | string;
  description: string;
  timeline: null | string;
  problem_statement: string;
  solution: string;
  design_process: string;
  development_process: string;
  deployment_process: string;
  image: string;
  link: string;
  date: string;
  slug: string;
  brand: number;
  related_projects: [];
}

export interface ITestimonialData {
  id: number;
  related_services: string[];
  name: string;
  comment: string;
  image: string;
}

export interface IFaqData {
  id: number;
  question: string;
  answer: string;
}

export interface ITeamMember {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: null | string;
  email: string;
  phone_number: string;
  gender: null | string;
  role: string;
  password: string;
  is_superuser: boolean;
  date_joined: string;
  is_staff: boolean;
  profile_picture: null | string;
  is_active: boolean;
}

export interface IPartners {
  id: number;
  brand_name: string;
  slug: string;
  logo: string;
  description: string;
  created_at: string;
}
