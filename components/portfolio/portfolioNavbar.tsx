"use client"
import React, {useState, useEffect} from 'react';
import { portfolioData } from '../data';

interface PortfolioItem {
  id: number;
  navItem: string;
}

const PortfolioNavbar: React.FC = () => {
   
    const [activeButton, setActiveButton] = useState<number | null>(null);

    useEffect(() => {
        if (portfolioData.length > 0) {
          setActiveButton(portfolioData[0].id);
        }
      }, []);

    const handleButtonClick = (id: number) => {
        setActiveButton(id);
    };

    return (
        <div className="max-w-7xl my-8 lg:my-24 lg:px-8 overflow-scroll lg:overflow-hidden w-[420px] lg:w-[1050px]">
        <div className='flex items-center justify-start w-[1102px]'>
        {portfolioData.slice(0, 5).map((portfolio: PortfolioItem) => (
            <div key={portfolio.id} className=''>
            <button
                onClick={() => handleButtonClick(portfolio.id)}
                className={`text-[16px] leading-[24px] border-[1px] rounded-full px-8 lg:px-5 py-5 mx-4 min-w-24 ${
                    activeButton === portfolio.id
                      ? 'bg-[#004AAD] text-white border-blue-500'
                      : 'bg-[] text-[#9897A7] border-[#3B3D3F]'
                  }`}
                aria-label={`Navigate to ${portfolio.navItem}`}
            >
                {portfolio.navItem}
            </button>
            </div>
        ))}
        </div>
        </div>
    );
};

export default PortfolioNavbar;
