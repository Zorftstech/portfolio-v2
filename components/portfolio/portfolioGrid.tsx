import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { portfolioProjects, PortfolioProject } from '../data';

// interface PortfolioItem {
//     id: number;
//     img: string; 
//     title: string; 
//     text: string;
//   }

const PortfolioGrid: React.FC = () => {
    return (
        <div className="mx-auto grid lg:grid-cols-2 lg:gap-16 max-w-7xl px-24 my-10 lg:px-8">
            {portfolioProjects.map((project) => (
                <div key={project.id}>
                    <Link href={`/portfolio/project?name=${project.name}`}>
                        <Image src={project.img} alt={project.title} width={497} height={309}  className='rounded-xl'/>
                        <h4 className='text-[14px] leading-[22px] text-[#FEFEFE] pt-5'>{project.name}</h4>
                        <h5 className='text-[12px] leading-[18px] text-[#9897A7] pb-5'>{project.title}</h5>
                    </Link>
                </div>
            ))}
            <button className='mx-auto flex items-center justify-between w-[152px] h-[48px] bg-[#454646] rounded-full px-6 lg:col-span-2'> 
                <Image src={'Vector-4.svg'} alt='' width={15.5} height={4} />
                <span className='text-white'>Load More</span>
            </button>
        </div>
    )
}

export default PortfolioGrid