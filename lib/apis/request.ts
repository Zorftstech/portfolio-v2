import axios, { AxiosInstance, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IContactData } from "../types";
// Create an instance of axios with baseURL
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const handleNonAxiosError = (error: any) => {
  if (error?.request) {
    // Handle network-related error (no response received)
    toast.error("Network error. Please check your connection.", {
      toastId: "Axios Error",
    });
    return { success: false };
  }
};

const handlOtherErrors = (error: any) => {
  // Handle other types of errors
  toast.error("An error occurred. Please try again.", {
    toastId: "other error",
  });
  return { success: false };
};

export const fetchTeamMembers = async () => {
  try {
    const response: AxiosResponse = await api.get("/auth/meet-the-team/");
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchBlogPosts = async () => {
  try {
    const response: AxiosResponse = await api.get("/blog/");
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};
export const fetchSingleBlogPost = async (id: string) => {
  try {
    const response: AxiosResponse = await api.get(`/blog/${id}`);
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchDataStatistics = async () => {
  try {
    const response: AxiosResponse = await api.get("/company-data-statistcs/");
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchProjects = async () => {
  try {
    const response: AxiosResponse = await api.get("/projects/");
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};
export const fetchWhyChooseZorfts = async () => {
  try {
    const response: AxiosResponse = await api.get("/why-choose-zorfts/");
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchSingleProject = async (id: string) => {
  try {
    const response: AxiosResponse = await api.get(`/project/${id}`);
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const sendContactMessage = async (data: IContactData) => {
  try {
    const response: AxiosResponse = await api.post("/contact-us/", data);
    // Handle successful response
    const responseData = response.data;
    toast.success("Message sent successfully", {
      toastId: "success",
    });
    return { success: true, message: responseData.message };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};
