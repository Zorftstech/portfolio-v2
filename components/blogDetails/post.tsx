"use client";
import "./styles.css";
import React, { useEffect, useRef } from "react";

interface IPostProps {
  content: string;
}

const Post: React.FC<IPostProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = content;
      // Apply minimal reset styles
      const applyResetStyles = (element: HTMLElement) => {
        const tagsToReset = ["p", "img"];
        tagsToReset.forEach((tag) => {
          const elements = element.getElementsByTagName(tag);
          Array.from(elements).forEach((el) => {
            // Reset styles for p tags
            if (tag === "p") {
              el.removeAttribute("style");
            }
            // Remove inline width and height for img tags
            if (tag === "img") {
              (el as HTMLElement).style.width = "";
              (el as HTMLElement).style.height = "";
            }
          });
        });
      };

      applyResetStyles(containerRef.current);
    }
  }, [content]);

  return <div ref={containerRef} className="post"></div>;
};

export default Post;
