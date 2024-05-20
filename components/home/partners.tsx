"use client"
import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaArrowRight } from 'react-icons/fa';
import { partnersLogo } from '../data';

const PartnersSection: React.FC = () => {
    return (
        <div className="mx-auto max-w-7xl  p-24 lg:px-8 mb-8">
            <div className='w-[60%] mb-8'>
                <h3 className='text-[#424247] text-[64px] text-start leading-[74px] font-semibold'>At Zorft Technologies, we&#x201A;re more than just a tech company</h3>
                <p className='text-[18px] leading-[40px] text-start text-[#8f8f92]'>We&#x201A;re your strategic partner in unlocking the full potential of your digital presence. </p>
            </div>
            <Marquee>
                {partnersLogo.map(partner => (
                    <div key={partner.id} className='px-4'>
                        <Image src={partner.src} width={150} height={30} alt={partner.name} objectFit='contain'/>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default PartnersSection