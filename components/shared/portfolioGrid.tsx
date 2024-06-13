"use client";
import React from "react";
import { portfolioProjects } from "../data";
import Image from "next/image";

const PortfolioGrid: React.FC = () => {
    return(
        <>
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-x-12 gap-y-10 text-[#fff] px-8">
          {portfolioProjects.slice(0, 4).map((project) => (
            <div key={project.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-transparent lg:aspect-none group-hover:scale-104 lg:h-100">
                <Image
                  src={project.img_b}
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
        <button className='mx-auto flex items-center justify-between w-[130px] h-[48px] bg-transparent border-[0.5px] border-[#FFFFFF] rounded-full px-6 mt-20'> 
                <Image src={'Vector-4.svg'} alt='' width={15.5} height={4} />
                <span className='text-[12px] leading-[13px] text-[#FFFFFF]'>See More</span>
        </button>
      </>

    )
}

export default PortfolioGrid;