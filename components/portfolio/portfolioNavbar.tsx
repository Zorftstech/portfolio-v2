"use client"
import React, {useState, useEffect} from 'react';
import { portfolioProjects, PortfolioProject } from '../data';

interface PortfolioItem {
  id: number;
  navItem: string;
}

const PortfolioNavbar: React.FC = () => {
   
    const [activeButton, setActiveButton] = useState<number | null>(null);

    useEffect(() => {
        if (portfolioProjects.length > 0) {
          setActiveButton(portfolioProjects[0].id);
        }
      }, []);

    const handleButtonClick = (id: number) => {
        setActiveButton(id);
    };

    return (
        <div className="mx-auto my-8 lg:my-24 overflow-scroll lg:overflow-hidden w-[387px] lg:w-[1050px]">
        <div className='flex items-center justify-start w-[1012px] lg:w-[1102px]'>
        {portfolioProjects.slice(0, 5).map((portfolio: PortfolioProject) => (
            <div key={portfolio.id} className=''>
            <button
                onClick={() => handleButtonClick(portfolio.id)}
                className={`text-[16px] leading-[24px] border-[1px] rounded-full px-5 lg:px-5 py-5 mx-4 min-w-24 ${
                    activeButton === portfolio.id
                      ? 'bg-[#004AAD] text-white border-blue-500'
                      : 'bg-[] text-[#9897A7] border-[#3B3D3F]'
                  }`}
                aria-label={`Navigate to ${portfolio.nav_item}`}
            >
                {portfolio.nav_item}
            </button>
            </div>
        ))}
        </div>
        </div>
    );
};

export default PortfolioNavbar;
