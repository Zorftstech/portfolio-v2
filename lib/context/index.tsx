"use client";

import React, { createContext, useContext, useState } from "react";
import {
  IBlog,
  IPartners,
  IProjectData,
  IService,
  ITechnologies,
} from "../types";

interface IStore {
  partners: IPartners[];
  setPartners: (partners: IPartners[]) => void;
  projects: IProjectData[];
  setProjects: (projects: IProjectData[]) => void;
  blogs: IBlog[];
  setBlogs: (blogs: IBlog[]) => void;
  services: IService[];
  setServices: (services: IService[]) => void;
  technologies: ITechnologies[];
  setTechnologies: (technologies: ITechnologies[]) => void;
}

interface IAppContextType {
  store: IStore;
}

const AppContext = createContext<IAppContextType | undefined>(undefined);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [partners, setPartners] = useState<IPartners[]>([]);
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [services, setServices] = useState<IService[]>([]);
  const [technologies, setTechnologies] = useState<ITechnologies[]>([]);
  const store: IStore = {
    partners,
    setPartners,
    projects,
    setProjects,
    blogs,
    setBlogs,
    services,
    setServices,
    technologies,
    setTechnologies,
  };

  return (
    <AppContext.Provider value={{ store }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContext.Provider");
  }
  return context;
}
