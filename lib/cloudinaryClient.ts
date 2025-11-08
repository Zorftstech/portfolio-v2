"use client";

export interface CloudinaryUploadOptions {
  folder?: string;
  tags?: string[];
}

export interface CloudinaryUploadResult {
  asset_id: string;
  public_id: string;
  secure_url: string;
  url: string;
  resource_type: string;
  original_filename: string;
  [key: string]: any;
}

/**
 * Unsigned client-side upload to Cloudinary.
 * Requires NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.
 */
export async function uploadToCloudinaryClient(
  file: File,
  options?: CloudinaryUploadOptions
): Promise<CloudinaryUploadResult> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Missing Cloudinary client env vars. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET."
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  if (options?.folder) formData.append("folder", options.folder);
  if (options?.tags?.length) formData.append("tags", options.tags.join(","));

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  const res = await fetch(endpoint, { method: "POST", body: formData });
  if (!res.ok) {
    let message = "Cloudinary upload failed";
    try {
      const err = await res.json();
      message = err?.error?.message || message;
    } catch (_) {}
    throw new Error(message);
  }
  return res.json();
}