"use client";
import React, { useEffect, useRef } from "react";

interface IPostProps {
  content: string;
}

const Post: React.FC<IPostProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = content;
    }
  }, [content]);

  return <div ref={containerRef} className=""></div>;
};

export default Post;
