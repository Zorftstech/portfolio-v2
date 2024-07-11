"use client";

import {
  fetchBlogPosts,
  fetchPartners,
  fetchProjects,
  fetchServices,
  fetchTechnologies,
  fetchTestimonials,
} from "@/lib/apis/request";
import { useAppContext } from "@/lib/context";
import { IChildrenProps } from "@/lib/types";
import React, { useEffect } from "react";

const LayoutRequests = ({ children }: IChildrenProps) => {
  const { store } = useAppContext();
  const {
    setPartners,
    setProjects,
    setServices,
    setTechnologies,
    setBlogs,
    setTestimonials,
  } = store;

  useEffect(() => {
    fetchPartners().then((res) => {
      if (res?.success) {
        console.log(res);
        setPartners(res?.data?.results);
      }
    });

    fetchProjects().then((res) => {
      if (res?.success) {
        setProjects(res?.data?.results);
      }
    });

    fetchServices().then((res) => {
      if (res?.success) {
        setServices(res?.data?.results);
      }
    });

    fetchTechnologies().then((res) => {
      if (res?.success) {
        setTechnologies(res?.data?.results);
      }
    });

    fetchBlogPosts().then((res) => {
      if (res?.success) {
        setBlogs(res?.data?.results);
      }
    });

    fetchTestimonials().then((res) => {
      setTestimonials(res?.data?.results);
    });
  }, [
    setPartners,
    setProjects,
    setServices,
    setTechnologies,
    setBlogs,
    setTestimonials,
  ]);
  return <>{children}</>;
};

export default LayoutRequests;
