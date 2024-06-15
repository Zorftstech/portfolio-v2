"use client";

import React, { createContext, useContext, useState } from "react";
import { IPartners, IProjectData } from "../types";

interface IStore {
  partners: IPartners[];
  setPartners: (partners: IPartners[]) => void;
  projects: IProjectData[];
  setProjects: (projects: IProjectData[]) => void;
}

interface IAppContextType {
  store: IStore;
}

const AppContext = createContext<IAppContextType | undefined>(undefined);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [partners, setPartners] = useState<IPartners[]>([]);
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const store: IStore = {
    partners,
    setPartners,
    projects,
    setProjects,
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
