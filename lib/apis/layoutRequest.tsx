"use client";

import {
  fetchBlogPosts,
  fetchPartners,
  fetchProjects,
  fetchServices,
  fetchTechnologies,
} from "@/lib/apis/request";
import { useAppContext } from "@/lib/context";
import { IChildrenProps } from "@/lib/types";
import React, { useEffect } from "react";

const LayoutRequests = ({ children }: IChildrenProps) => {
  const { store } = useAppContext();
  const { setPartners, setProjects, setServices, setTechnologies, setBlogs } =
    store;

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

    fetchTechnologies().then((res) => {
      setTechnologies(res?.data.results);
    });

    fetchBlogPosts().then((res) => {
      setBlogs(res?.data.results);
    });
  }, [setPartners, setProjects, setServices, setTechnologies, setBlogs]);
  return <>{children}</>;
};

export default LayoutRequests;
