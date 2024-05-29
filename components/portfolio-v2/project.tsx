'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { portfolioProjects, PortfolioProject } from '../data'; // Adjust the import path as needed

const ProjectDetails: React.FC = () => {
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
        <>
        <div className="mx-auto flex max-w-7xl items-star justify-center flex-col mt-24 px-8 lg:px-12 w-full">
                <div key={project.id} className='lg:w-[1100px] lg:h-[193px]'>
                    <h2 className='text-[32px] lg:text-[72px] leading-[45px] lg:leading-[80px] font-bold text-[#E2E2E2]'>{project.name}</h2>
                    <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[40px] font-normal text-[#9897A7] mt-10 lg:w-[900px]'>
                        At Zorft Technologies, we believe in the power of collaboration. Our strategic 
                        partnerships play a pivotal role in driving innovation and delivering exceptional 
                        solutions to our clients.
                    </p>
                </div>

        </div>
        </>
    )
}

export default ProjectDetails