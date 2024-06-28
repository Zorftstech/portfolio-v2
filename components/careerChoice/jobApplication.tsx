"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { careers, Careers } from "../careers/data";
import { ICareerInnerPageProps } from ".";
import { FaArrowLeftLong } from "react-icons/fa6";
import scrollToTop from "@/lib/helpers/scrollToTop";
import { countries } from "./data";
import { toast } from "react-toastify";
import { sendJobForm } from "@/lib/apis/request";
import { IJobFormData } from "@/lib/types";

type FileKey = "resume" | "coverLetter" | "additionalAttachment";

const JobForm: React.FC<ICareerInnerPageProps> = ({
  openingDetails,
  setCurrentPage,
}) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "",
    address: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputs = [
    {
      name: "first_name",
      type: "text",
      value: formData.first_name,
      placeholder: "First name",
    },
    {
      name: "last_name",
      type: "text",
      value: formData.last_name,
      placeholder: "Last name",
    },
    {
      name: "email",
      type: "email",
      value: formData.email,
      placeholder: "Email",
    },
    {
      name: "phone_number",
      type: "text",
      value: formData.phone_number,
      placeholder: "Phone number",
    },
    {
      name: "address",
      type: "text",
      value: formData.address,
      placeholder: "Address",
    },
  ];

  const genders = ["Male", "Female"];

  const [files, setFiles] = useState<{
    resume: File | null;
    coverLetter: File | null;
    additionalAttachment: File | null;
  }>({
    resume: null,
    coverLetter: null,
    additionalAttachment: null,
  });

  const handleFileChange = (fileType: FileKey) => (file: File) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: file,
    }));
  };

  const handleBack = () => {
    scrollToTop();
    setCurrentPage(1);
  };

  const handleSubmit = () => {
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "phone_number",
      "country",
      "gender",
    ];
    const isAnyFieldEmpty = requiredFields.some(
      (field) => !formData[field as keyof typeof formData]
    );

    if (isAnyFieldEmpty) {
      toast.error("Please fill in all required fields", {
        toastId: "required fields",
      });
      return;
    }

    // Check if all documents are uploaded
    const requiredDocuments = ["resume", "coverLetter", "additionalAttachment"];
    const isAnyDocumentMissing = requiredDocuments.some(
      (doc) => !files[doc as FileKey]
    );

    if (isAnyDocumentMissing) {
      toast.error("Please upload all required documents", {
        toastId: "required fields",
      });
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("id", openingDetails?.id.toString() || "");
    formDataObj.append("title", openingDetails?.job_title || "");
    formDataObj.append("first_name", formData.first_name);
    formDataObj.append("last_name", formData.last_name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone_number", formData.phone_number);
    formDataObj.append("country", formData.country);
    formDataObj.append("address", formData.address);
    formDataObj.append("gender", formData.gender);

    if (files.resume) {
      formDataObj.append("resume", files.resume);
    }
    if (files.coverLetter) {
      formDataObj.append("cover_letter", files.coverLetter);
    }
    if (files.additionalAttachment) {
      formDataObj.append("additional_attachment", files.additionalAttachment);
    }

    sendJobForm(formDataObj).then((res) => {
      if (res?.success) {
        setCurrentPage(1);
        scrollToTop();
      }
    });
  };

  return (
    <div className="mt-10 lg:mt-28 pb-14 lg:pb-64">
      <div key={openingDetails?.id}>
        <div className="w-[372px] lg:w-[1200px] text-start flex items-center">
          <FaArrowLeftLong
            className="text-[24px] text-center cursor-pointer text-gray-500 mr-8"
            onClick={handleBack}
          />
          <h2 className="text-[28px] lg:text-[64px] leading-[38px] lg:leading-[80px] text-[#004AAD] font-bold lg:text-center">
            Apply for job as a {openingDetails?.job_title}.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-x-28 gap-y-14 lg:gap-y-10 w-[372px] lg:w-[1200px] text-start lg:mt-44 py-16 lg:py-0">
          {inputs.map((input, index) => (
            <InputField
              key={index}
              name={input.name}
              type={input.type}
              value={input.value}
              placeholder={input.placeholder}
              onChange={handleChange}
            />
          ))}
          <SelectField
            name="country"
            value={formData.country}
            onChange={handleChange}
            options={countries}
          />
          <SelectField
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genders}
          />
        </div>

        <hr className="bg-[#E7E7E7] h-[1px] my-5 lg:my-24" />

        <p className="text-[14px] lg:text-[22px] leading-[27px] lg:leading-[31.2px] text-[#5B5B5B] mt-4 mb-8">
          Maximum file size: 5 MB <br />
          Accepted file formats: docx, txt, pdf, doc
        </p>

        <div className="w-[372px] lg:w-[1200px] text-start mt-20 lg:mt-0">
          <FileInput
            label="Upload Resume/CV"
            file={files.resume}
            onFileChange={handleFileChange("resume")}
          />
          <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-16" />
          <FileInput
            label="Upload Cover Letter"
            file={files.coverLetter}
            onFileChange={handleFileChange("coverLetter")}
          />
          <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-16" />
          <FileInput
            label="Additional Attachment"
            file={files.additionalAttachment}
            onFileChange={handleFileChange("additionalAttachment")}
          />
        </div>

        <hr className="bg-[#E7E7E7] h-[1px] my-10 lg:my-16" />

        <button
          onClick={handleSubmit}
          type="button"
          className="lg:justify-self-end flex py-[20px] px-[28px] rounded-full bg-[#00439D] w-[160px] justify-between my-7 lg:my-16"
        >
          <Image
            src={"/Vector-4.svg"}
            alt=""
            width={24}
            height={4}
            className="self-center"
          />
          <span className="text-[14px] leading-[16.1px] text-[#E7E7E7]">
            Apply now
          </span>
        </button>
      </div>
    </div>
  );
};

export default JobForm;

interface FileInputProps {
  label: string;
  file: File | null;
  onFileChange: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({ label, file, onFileChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        // Check if file size is greater than 5MB
        toast.error("File size exceeds 5MB limit", {
          toastId: "Exceed file size",
        });
      } else {
        onFileChange(selectedFile); // Pass the file to the parent component
      }
    }
  };

  return (
    <div>
      <h4 className="text-[16px] lg:text-[28px] leading-[27px] lg:leading-[41.6px] text-[#3B3D3F] font-bold">
        {label}
      </h4>
      <button className="flex py-[16px] px-[24px] rounded-full border-[1px] border-[#E6EDF7] mt-5 lg:ml-5 relative cursor-pointer">
        <Image
          src="/material-symbols_upload.svg"
          alt=""
          width={24}
          height={24}
        />
        <label
          className={`text-[16px] lg:text-[14px] leading-[27px] lg:leading-[16.1px]
             self-center ml-2 ${
               file ? "font-meduim text-green-600" : "text-[#3B3B3B]"
             }`}
        >
          {file ? (
            <>
              {file.name.length > 24 ? (
                <>
                  {file.name.slice(0, 24)}...{file.name.slice(-4)}
                </>
              ) : (
                file.name
              )}
            </>
          ) : (
            label
          )}
        </label>
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          accept=".docx, .txt, .pdf, .doc"
          onChange={handleChange}
        />
      </button>
    </div>
  );
};

interface InputFieldProps {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const commonInputStyles =
    "text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#121214] border-b-[1px] border-[#8E8E8E] focus:outline-none pb-5";

  return (
    <input
      name={name}
      type={type}
      className={commonInputStyles}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

interface SelectFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  value,
  onChange,
  options,
}) => {
  const commonSelectStyles =
    "text-[16px] lg:text-[20px] leading-[27px] lg:leading-[31px] text-[#8E8E8E] border-b-[1px] border-[#8E8E8E] bg-transparent focus:outline-none pb-5";

  return (
    <select
      name={name}
      className={commonSelectStyles}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        Select {name}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
