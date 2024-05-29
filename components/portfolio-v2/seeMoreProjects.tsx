'use client'
import React from 'react';
import Image from 'next/image';
import { portfolioProjects, SeeMoreProjects } from '../data';

const MoreProjects: React.FC = () => {
    const seeMoreProjects = portfolioProjects[0].see_more_projects;

    return (
        <div className="mx-auto max-w-7xl px-8 my-8 lg:mt-80 lg:px-8">
            <h2 className='text-[40px] leading-[52px] font-bold text-[#E2E2E2]'>See More Projects</h2>
            <div className='mt-20 lg:pl-5 w-[404px] lg:w-[1188px] overflow-x-scroll lg:overflow-x-hidden'>
                <div className='flex justify-between w-[790px] lg:w-[1188px]'>
                    {seeMoreProjects.map((project: SeeMoreProjects) => (
                        <div key={project.id}>
                            <Image src={project.img} alt={project.title} width={364} height={397}  className='rounded-xl lg:w-[562px]'/>
                            <h4 className='text-[14px] leading-[22px] text-[#FEFEFE] pt-5'>{project.title}</h4>
                            <h5 className='text-[12px] leading-[18px] text-[#9897A7] pb-5'>{project.text}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;
