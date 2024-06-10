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
