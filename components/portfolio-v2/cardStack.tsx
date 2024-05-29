'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { portfolioProjects, PortfolioProject } from '../data'; // Adjust the import path as needed


const CardStack: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('name');
    console.log(id)
    const [project, setProject] = useState<PortfolioProject | undefined>(undefined);

    useEffect(() => {
        if (id && typeof id === 'string') {
            const foundProject = portfolioProjects.find(p => p.name.toString() === id);
            setProject(foundProject);
        }
    }, [id]);

    if (!project) {
        return <div className='text-[white]'>Project not found</div>;
    }

    return (
        <div className="mx-auto flex flex-col max-w-7xl items-start justify-center mt-12 lg:mt-20 px-8 lg:px-12 lg:w-full">
                <>
                <div className='flex flex-col lg:flex-row justify-between bg-[#313137] rounded-xl px-5 lg:px-10 lg:overflow-hidden lg:w-full'>
                    <div className='flex flex-col justify-between max-w-[400px] lg:mr-[px] pr-[px]'>
                        <div>
                            <h2 className='text-[32px] leading-[36.8px] font-bold text-[#E2E2E2] mt-8 lg:mt-20'>{project.name}</h2>
                            <h4 className='text-[20px] leading-[23px] font-bold text-[#C8C7CF] mt-3 lg:mt-6 mb-5 lg:mb-10'>{project.title}</h4>
                            <p className='text-[14px] leading-[18px] font-normal text-[#9D9CA5]'>
                                Lorem ipsum dolor sit amet consectetur. Varius sed quis aliquet est sed. Amet 
                                ut nunc at sagittis sed id dui et massa. Et nec adipiscing vel neque aliquet 
                                vivamus ultrices. Pellentesque non pulvinar non diam arcu.
                            </p>
                        </div>
                        <div className='mb-5 hidden lg:block'>
                            <p className='inline-block text-[12px] leading-[37px] text-[#C8C7CF]'>Timeline <br /> <span className='text-[15px]'>{project.timeline}</span></p>
                            <p className='inline-block text-[12px] leading-[37px] text-[#C8C7CF] ml-8'>date <br />  <span className='text-[15px]'>{project.date}</span></p>
                        </div>
                    </div>
                    <Image src={project.img_c} alt={'MyFoodAngels'} width={348} height={327} className='object-cover rounded-xl my-7 lg:mt-[40px] lg:mb-[-10px]  lg:w-[663px] lg:h-[623px] col-span-2'/>
                    <div className='mb-5 lg:mb-0 lg:hidden'>
                        <p className='inline-block text-[12px] leading-[30px] text-[#C8C7CF]'>Timeline <br /> <span className='text-[15px]'>{project.timeline}</span></p>
                        <p className='inline-block text-[12px] leading-[30px] text-[#C8C7CF] ml-8'>date <br />  <span className='text-[15px]'>{project.date}</span></p>
                    </div>
                </div>
                <div className='bg-[#313137] rounded-xl px-5 py-8 my-10'>
                <h2 className='text-[28px] lg:text-[48px] leading-[38px] lg:leading-[120px] font-bold text-[#E2E2E2]'>Problem Statement</h2>
                    <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-normal text-[#9897A7] mt-4 lg:w-[px]'>
                       {project.problem_statement}
                    </p>
                </div>
                <div className='bg-[#313137] rounded-xl px-5 py-8'>
                <h2 className='text-[28px] lg:text-[48px] leading-[38px] lg:leading-[120px] font-bold text-[#E2E2E2]'>What we did</h2>
                    {project.what_we_did.map((item) => (
                        <div key={item.id}>
                            <p className='text-[18px] lg:text-[19px] leading-[28px] lg:leading-[28px] font-normal text-[#9897A7] mt-4'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                </>
        </div>
    )
}

export default CardStack