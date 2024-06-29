"use client"
import React, {useState, useEffect} from 'react';
import { portfolioProjects, PortfolioProject } from '../data';

interface PortfolioItem {
  id: number;
  navItem: string;
}

const PortfolioNavbar: React.FC = () => {
  const { store } = useAppContext();
  const { projects } = store;
  const [activeButton, setActiveButton] = useState<number>(0);
  const [currentProjects, setCurrentProjects] = useState<IProjectData[]>([]);
  useEffect(() => {
    setCurrentProjects(projects);
  }, [projects]);

  const handleButtonClick = (type: string, index: number) => {
    setActiveButton(index);
    if (type === "All") {
      setCurrentProjects(projects);
    }

    if (index >= 1) {
      const filteredProjects = projects?.filter((project) =>
        project.tags.some(
          (tag) => tag.name.toLowerCase() === type.toLowerCase()
        )
      );

      setCurrentProjects(filteredProjects);
    }
  };
  return (
    <div className="">
      <div className="my-8 lg:my-24 overflow-x-auto w-[387px] lg:w-full">
        <div className="flex items-center justify-center w-[1012px] lg:w-full">
          {projectTypes.map((type, typeIndex) => (
            <div key={typeIndex} className="flex">
              <button
                onClick={() => handleButtonClick(type, typeIndex)}
                className={`text-[16px] leading-[24px] border-[1px] rounded-full px-5 lg:px-5 py-5 mx-3 min-w-[120px] ${
                  activeButton === typeIndex
                    ? "bg-[#004AAD] text-white border-blue-500"
                    : "bg-[] text-[#9897A7] border-[#3B3D3F]"
                }`}
                aria-label={`Navigate to ${type}`}
              >
                {type}
              </button>
            </div>
        ))}
        </div>
        </div>
    );
};

export default PortfolioNavbar;
