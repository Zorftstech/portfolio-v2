"use client"
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaArrowRight } from 'react-icons/fa';

const partnersLogo = [
    {
        id: 1,
        src: '/mfa-logo.svg',
        name: 'MyFoodAngels',
    },
    {
        id: 2,
        src: '/teqia-logo.svg',
        name: 'Teqia Foundation',
    },
    {
        id: 3,
        src: '/provarex-logo.svg',
        name: 'Provarex',
    },
    {
        id: 4,
        src: '/trayde-logo.svg',
        name: 'Trayde By Zorfts Technologies',
    },
    {
        id: 5,
        src: '/repairfind-logo.svg',
        name: 'RepairFind',
    },

]
const PartnersSection: React.FC = () => {
    return (
        <div className="mx-auto max-w-7xl p-6 lg:px-8 mb-8">
            <div className='w-[60%] mb-8'>
                <h3 className='text-[#424247] text-[64px] text-start leading-[74px]'>At Zorft Technologies, we're more than just a tech company</h3>
                <p className='text-[18px] leading-[40px] text-start text-[#8f8f92]'>We're your strategic partner in unlocking the full potential of your digital presence. </p>
            </div>
            {/* <Image src="/partner_img.png" alt="Partnership image" layout="responsive" /> */}
            <Marquee>
                {partnersLogo.map(partner => (
                    <div key={partner.id}>
                        <Image src={partner.src} width={180} height={40} alt={partner.name} objectFit='contain'/>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default PartnersSection