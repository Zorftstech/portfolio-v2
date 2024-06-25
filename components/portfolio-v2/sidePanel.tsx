"use client";
import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import { IProjectInformationProps } from "./project";

const SidePanel: React.FC<IProjectInformationProps> = ({ project }) => {
  console.log(project);
  const id = "Erlota";
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProcess, setCurrentProcess] = useState<string>("");
  const [processTab, setProcessTab] = useState<string[]>([]);

  useEffect(() => {
    if (project) {
      if (project?.design_process !== "") {
        setProcessTab((prev) =>
          prev.includes("Design") ? prev : [...prev, "Design"]
        );
      }
      if (project?.development_process !== "") {
        setProcessTab((prev) =>
          prev.includes("Development") ? prev : [...prev, "Development"]
        );
      }
      if (project?.deployment_process !== "") {
        setProcessTab((prev) =>
          prev.includes("Deployment") ? prev : [...prev, "Deployment"]
        );
      }
    }
  }, [project]);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (project) {
      setCurrentProcess(project?.design_process);
    }
  }, [project]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = currentProcess;

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
  }, [currentProcess, activeIndex]);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    switch (index) {
      case 0:
        setCurrentProcess(project?.design_process || "");
        break;

      case 0:
        setCurrentProcess(project?.development_process || "");
        break;

      case 0:
        setCurrentProcess(project?.deployment_process || "");
        break;

      default:
        setCurrentProcess(project?.design_process || "");
        break;
    }
  };
  return (
    <div className="flex items-star justify-between mt-5 lg:mt-28 lg:px-12 w-full">
      <div className="ml-10 hidden lg:block">
        <div className="flex justify-between w-[200px] relative">
          <div className="h-[430px] w-[3px] bg-[#363636]">
            {/* Current tab Indicator */}
            <div
              id="indicator"
              className="bg-[#D1D1D1] my-[15px]"
              style={{
                transform: `translateY(${activeIndex * 200}px)`,
                transition: "transform 0.4s ease-in-out",
                height: 400 / processTab.length,
              }}
            ></div>
          </div>
          <div className="flex flex-col justify-between py-5 h-[430px]">
            {processTab.map((process, processIndex) => (
              <div
                key={processIndex}
                style={{ height: 430 / processTab.length }}
                className="ml-[-170px] flex"
              >
                <button
                  className="text-[24px] leading-[40px] text-[#68686C] font-bold"
                  onClick={() => handleButtonClick(processIndex)}
                >
                  {process}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-16 lg:gap-32 lg:border-[1px] border-[#464649] rounded-3xl w-[510px] lg:w-[687px] p-8 lg:p-12">
        <div ref={containerRef} className="side_panel_card"></div>
      </div>
    </div>
  );
};

export default SidePanel;
