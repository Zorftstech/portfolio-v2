"use client"
import React from 'react';
import { portfolioProjects } from '../data';
import Image from 'next/image';

const PortfolioSection: React.FC = () => {
    return (
        <div className='w-[100%] bg-[#004AAD]'>
            <div className="mx-auto max-w-7xl  p-24 lg:px-8 mb-8 ">
                <h2 className="text-[64px] text-center leading-[74px] font-semibold text-white mb-[64px]
                ">See some of our works here</h2>

                {/* =========== portfolio grid ============= */}
                <div className='grid grid-cols-2 gap-x-12 gap-y-10 text-[#fff]'>
                    {portfolioProjects.map((project) => (
                        <div key={project.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:scale-104 lg:h-100">
                                <Image
                                src={project.img}
                                alt={project.name}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                <h3 className="text-base text-white font-semibold leading-5">
                                    <a href={project.url}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {project.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-white">{project.stack}</p>
                                </div>
                                <p className="text-sm font-medium text-white">{project.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection