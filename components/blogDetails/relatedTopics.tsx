"use client";
import React, { useEffect, useState } from "react";
import Blogs from "../blog/blogs";
import { BlogDetailProps } from "./owner";
import { IBlog } from "@/lib/types";
import { useAppContext } from "@/lib/context";

const RelatedTopics: React.FC<BlogDetailProps> = ({ blogDetails }) => {
  const [topics, setTopics] = useState<IBlog[]>([]);
  const { store } = useAppContext();
  const { blogs } = store;

  useEffect(() => {
    if (blogs && blogDetails?.related_blogs) {
      setTopics(
        blogs.filter((item) => blogDetails?.related_blogs.includes(item.id))
      );
    }
  }, [blogs, blogDetails?.related_blogs]);

  return (
    <div>
      <Blogs blogs={topics} />
    </div>
  );
};

export default RelatedTopics;
