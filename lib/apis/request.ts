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
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchPartners = async () => {
  try {
    const response: AxiosResponse = await api.get("/brand-partners/");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
export const fetchFaq = async () => {
  try {
    const response: AxiosResponse = await api.get("/faq/");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchTestimonials = async () => {
  try {
    const response: AxiosResponse = await api.get("/testimonials/");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchServiceTestimonials = async (serviceId: string) => {
  try {
    const response: AxiosResponse = await api.get(
      `/testimonials-by-services/${serviceId}`
    );
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false, message: error.response.data.detail };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchPartnersTestimonials = async () => {
  try {
    const response: AxiosResponse = await api.get(
      "/testimonials-brandpartners/"
    );
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchSingleBlogPost = async (blogId: string) => {
  try {
    const response: AxiosResponse = await api.get(`/blog/${blogId}`);
    // Handle successful response
    const responseData = response.data;
    return { success: true, data: responseData };
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false, message: error.response.data.detail };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchDataStatistics = async () => {
  try {
    const response: AxiosResponse = await api.get("/company-data-statistcs/");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchServices = async () => {
  try {
    const response: AxiosResponse = await api.get("/services");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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

export const fetchTechnologies = async () => {
  try {
    const response: AxiosResponse = await api.get("/stacks-with-technologies");
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};

export const fetchSingleService = async (id: string) => {
  try {
    const response: AxiosResponse = await api.get(`/services/${id}`);
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
    const response: AxiosResponse = await api.get(`/projects/${id}`);
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      return { success: true, data: responseData };
    }
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
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      toast.success("Message sent successfully", {
        toastId: "success",
      });
      return { success: true, message: responseData.message };
    }
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

export const sendNewsLetter = async (email: string) => {
  try {
    const response: AxiosResponse = await api.post("/newsletter/", {
      email: email,
    });
    if (response.status >= 200 && response.status < 300) {
      const responseData = response.data;
      toast.success("Subscription successful", {
        toastId: "success",
      });
      return { success: true, message: responseData.message };
    }
  } catch (error) {
    // Handle error response
    if (axios.isAxiosError(error)) {
      if (error.response) {
        toast.warning(error?.response.data.email[0], {
          toastId: "warning",
        });
        return { success: false };
      } else handleNonAxiosError(error);
    } else {
      handlOtherErrors(error);
    }
  }
};
