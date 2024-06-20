"use client";

import {
  fetchPartners,
  fetchProjects,
  fetchServices,
} from "@/lib/apis/request";
import { useAppContext } from "@/lib/context";
import { IChildrenProps } from "@/lib/types";
import React, { useEffect } from "react";

const LayoutRequests = ({ children }: IChildrenProps) => {
  const { store } = useAppContext();
  const { setPartners, setProjects, setServices } = store;

  useEffect(() => {
    fetchPartners().then((res) => {
      setPartners(res?.data.results);
    });

    fetchProjects().then((res) => {
      setProjects(res?.data.results);
    });
    fetchServices().then((res) => {
      setServices(res?.data.results);
    });
  }, []);
  return <>{children}</>;
};

export default LayoutRequests;
