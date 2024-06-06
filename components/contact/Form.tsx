"use client";
import {
  fetchBlogPosts,
  fetchTeamMembers,
  sendContactMessage,
} from "@/lib/apis/request";
import Image from "next/image";
import React, { FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

const FormSection: React.FC = () => {
  const [contactField, setContactField] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(contactField);
    setContactField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      contactField.email === "" ||
      contactField.message === "" ||
      contactField.subject === ""
    ) {
      toast.error("All fields are required", { toastId: "error" });
      return;
    }
    sendContactMessage(contactField);
  };

  return (
    <div className="mx-auto w-full max-w-7xl p-24 lg:px-8 mb-8">
      <div className="bg-[#004AAD] rounded-xl p-10 flex justify-center gap-8 text-[#8AACD9] w-full py-[75px]">
        <h3 className="text-[32px] font-semibold leading-10 text-white max-w-[200px]">
          Send us a message
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex w-full justify-start items-center gap-6 flex-col max-w-[700px]"
        >
          {/*  =========== subject ============  */}
          <input
            type="text"
            placeholder="Subject"
            className="bg-[transparent] capitalize outline-none border-b-2 border-[#8AACD9] w-full"
            name="subject"
            onChange={(e) => handleFieldChange(e)}
            value={contactField.subject}
          />

          {/*  ============= message inout ============== */}
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[transparent] outline-none border-b-2 border-[#8AACD9] w-full my-10"
            name="email"
            onChange={(e) => handleFieldChange(e)}
            value={contactField.email}
          />

          {/* =============== Message =================  */}
          <textarea
            name="message"
            className="bg-[transparent] outline-none border-b-2 border-[#8AACD9] w-full"
            onChange={(e) => handleFieldChange(e)}
            value={contactField.message}
            placeholder="Your Message"
          />

          <button
            className="bg-[#E6EDF7] flex justify-center 
            items-center gap-4 w-200px py-3 px-5 rounded-3xl
            text-[#000] mt-10 self-start"
            type="submit"
          >
            <Image src={"/vector-3.svg"} alt="icon" width={15.5} height={4} />{" "}
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
