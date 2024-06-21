"use client";
import React from "react";
import Image from "next/image";
import { IBlog } from "@/lib/types";
import getFullDate from "@/lib/helpers/getFullDate";
export interface BlogDetailProps {
  blogDetails: IBlog | undefined;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogDetails }) => {
  return (
    <div className="flex flex-col lg:mb-8 w-full">
      <Image
        width={1200}
        height={480}
        className="object-cover rounded-[80px] w-full max-h-[480px]"
        src={blogDetails?.cover_image || ""}
        alt="blog-img"
      />
      <div className="grid lg:grid-cols-3 gap-5 lg:mt-16">
        <h2 className="text-[28px] lg:text-[40px] leading-[38px] lg:leading-[28.89px] text-[#5F5E6C] font-bold mt-5 lg:col-span-2">
          {blogDetails?.title}
        </h2>
        <div className="flex items-center">
          <Image
            width={50}
            height={50}
            className="object-contain rounded-full"
            src={""}
            alt="detail-img"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">
              {blogDetails?.author_full_name}
            </h4>
            <span className="text-sm text-gray-600">
              {getFullDate(blogDetails?.created_at || "")}
            </span>
            <span className="text-sm text-gray-600 mx-2">•</span>
            <span className="text-sm text-gray-600">Mins Read</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-base text-gray-500">{}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
