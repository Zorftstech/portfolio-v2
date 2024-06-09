"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '../data';

const ServicesSection: React.FC = () => {
  // State to track the index of the service being hovered over
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='mx-auto flex flex-col items-center justify-center max-w-7xl p-24 my-8 lg:px-8 w-full'>
      
      {/* ============= Section description ============= */}
      <h2 className='text-4xl lg:text-7xl font-bold text-[#004AAD] text-center mb-8 lg:mb-12'>Services that we provide</h2>
      <p className='text-lg lg:text-xl text-[#5F5E6C] text-center lg:px-36'>
        Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
        Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet 
        in neque et
      </p>

      {/* ============= Services grid ============= */}
      <div className='overflow-x-scroll lg:overflow-visible mt-8 lg:mt-20 w-9/12 lg:w-full'>
        <div className='grid grid-cols-10 lg:grid-cols-3 gap-x-96 lg:gap-10 lg:w-full'>
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className='hover-effect border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] cursor-pointer' 
              onMouseEnter={() => setHoveredIndex(index)}  // Set the hovered index when mouse enters
              onMouseLeave={() => setHoveredIndex(null)}   // Reset hovered index when mouse leaves
            >
              {/* ============= Service info ============= */}
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>{service.title}</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C] min-h-40'>{service.text}</p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={hoveredIndex === index ? service.hoveredImageSrc : service.imageSrc} alt='icon' width={15.5} height={4} />
                <Link href={`/services?title=${service.title}`} className='text-[#424247] cursor-pointer no-underline'>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
