import React from 'react'
import Image from 'next/image';
import { partners } from '../data';

const OurPartners: React.FC = () => {
  return (
    <div className='w-[100%]'>
      <div className='ourPartner w-[428px] lg:w-[1440px] h-[224px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center'>
        <div className='w-[380px] lg:w-[758px] h-[143px] lg:h-[156px] self-end text-center mb-5'>
            <h2 className='text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#FFFFFF]'>Our Partners</h2>
            <p className='lg:text-[14px] lg:leading-[21px] font-normal text-[#FFFFFF]'>
                At Zorft Technologies, we believe in the power of collaboration. Our strategic 
                partnerships play a pivotal role in driving innovation and delivering 
                exceptional solutions to our clients.
            </p>
        </div>
      </div>
      <div className='grid grid-cols-6 lg:gap-[150.82px] overflow-hidden w-[439.51px] lg:w-[1638px] h-[109.88px] lg:h-[156.01px] lg:py-[40px]'>
        {partners.map((partner, index) => (
            <div key={index} className='w-[] lg:w-[233.15px] lg:h-[76.01px]'>
                <Image src={partner.src} alt={partner.name} width={233.15} height={76.01} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default OurPartners