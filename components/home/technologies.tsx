import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const Technologies = [
    {
        id: 1,
        src: '/Framer-1.svg',
        name: 'MyFoodAngels',
    },
    {
        id: 2,
        src: '/Framer-2.svg',
        name: 'Teqia Foundation',
    },
    {
        id: 3,
        src: '/CSS.svg',
        name: 'Provarex',
    },
    {
        id: 4,
        src: '/C++.svg',
        name: 'Trayde By Zorfts Technologies',
    },
    {
        id: 5,
        src: '/Java.svg',
        name: 'RepairFind',
    },
    {
        id: 6,
        src: '/GO.svg',
        name: 'RepairFind',
    },
    {
        id: 7,
        src: '/Node-js.svg',
        name: 'RepairFind',
    },
    {
        id: 8,
        src: '/HTML.svg',
        name: 'RepairFind',
    },
    {
        id: 9,
        src: '/Python.svg',
        name: 'RepairFind',
    },
    {
        id: 10,
        src: '/React-js.svg',
        name: 'RepairFind',
    },
];

const TechnologiesWeUse: React.FC = () => {
    return (
        <div className="mx-auto max-w-7xl p-6 lg:px-8 mb-8">
            <div className='w-full mb-8'>
                <h3 className='text-[#004AAD] text-4xl lg:text-[64px] lg:leading-[52px] text-center font-bold'>Technologies we use</h3>
                <p className='text-[#5F5E6C] text-lg lg:text-[20px] lg:leading-[31px] text-center font-normal mt-10'>At Zorft technologies, we make use of modern and efficient technology for our projects</p>
            </div>
            <Marquee direction="left">
                {Technologies.map((tech, index) => (
                    <div key={tech.id} style={{ marginLeft: '-70px', marginTop: index % 2 === 0 ? '220px' : '-80px' }}>
                        <Image src={tech.src} width={180} height={40} alt={tech.name} objectFit='contain'/>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TechnologiesWeUse;
