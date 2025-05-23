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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactField, setContactField] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      contactField.email === "" ||
      contactField.message === "" ||
      contactField.subject === ""
    ) {
      setIsSubmitting(false);
      toast.error("All fields are required", { toastId: "error" });
      return;
    }
    sendContactMessage(contactField).then(() => setIsSubmitting(false));
  };

  return (
    <div className="my-32">
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
            className={`bg-[#E6EDF7] flex ${!isSubmitting && "hover:opacity-90"}
            items-center gap-4 w-200px py-3 px-5 rounded-3xl justify-center
            text-[#000] mt-10 self-start ${isSubmitting && "opacity-30"}`}
            type="submit"
            disabled={isSubmitting}
          >
            <Image src={"/vector-3.svg"} alt="icon" width={15.5} height={4} />{" "}
            {isSubmitting ? "Loading" : "Contact Us"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
