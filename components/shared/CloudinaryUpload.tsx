"use client";
import React, { useState } from "react";
import Image from "next/image";
import { uploadToCloudinaryClient, CloudinaryUploadResult } from "@/lib/cloudinaryClient";

interface Props {
  onUploaded?: (result: CloudinaryUploadResult) => void;
  accept?: string;
  buttonText?: string;
}

const CloudinaryUpload: React.FC<Props> = ({ onUploaded, accept = "image/*", buttonText = "Upload" }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setError(null);
    if (f && f.type.startsWith("image/")) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    setError(null);
    try {
      const result = await uploadToCloudinaryClient(file, { folder: "uploads" });
      onUploaded?.(result);
    } catch (e: any) {
      setError(e?.message || "Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="file" accept={accept} onChange={handleFileChange} />
      {preview && (
        <div className="relative w-48 h-32">
          <Image src={preview} alt="Preview" fill className="object-cover rounded" />
        </div>
      )}
      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || isUploading}
        className={`w-32 py-2 px-4 rounded-3xl text-white ${isUploading ? "bg-gray-500" : "bg-[#004AAD] hover:opacity-90"}`}
      >
        {isUploading ? "Uploading..." : buttonText}
      </button>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default CloudinaryUpload;