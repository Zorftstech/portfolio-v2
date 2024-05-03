"use client"
import React, { useEffect, useState } from 'react'
import SlideShow from './slideShow';
import { valuesData } from '../data';

const Mission: React.FC = ()=> {
    
  return (
    <div className='mx-auto flex flex-col items-center justify-center max-w-7xl p-24 py-0 my-8 lg:px-8 w-full'>
        <div className='grid lg:grid-cols-2 w-full'>
            <div className=''>
                <h4 className='text-[26px] leading-[23px] text-[#8F8F92] w-[117px] h-[23px]'>Mission</h4>
                <h2 className='text-[32px] lg:text-[48px] leading-[45px] lg:leading-[64px] font-bold text-[#004AAD] w-full h-[128px] mt-8'>Our Mission is pretty straightforward</h2>
            </div>
            <SlideShow />
        </div>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-0 mt-36'>
            <div className=''>
                <h2 className='text-[48px] leading-[80px] font-bold text-[#004AAD]'>Values</h2>
                <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-[#5F5E6C] lg:w-[390px] lg:h-[150px]'>
                    Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis 
                    arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan 
                    imperdiet in neque et
                </p>
            </div>
            <ul className='list-disc grid lg:grid-cols-2 gap-10 lg:gap-24 ml-5 lg:ml-0'>
                {valuesData.map((item, index) => (
                    <li key={index} className='text-[#5F5E6C] lg:w-[287px] lg:h-[124px]'>
                    <h4 className='font-bold text-[20px] leading-[31px]'>{item.title}</h4>
                    <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px]'>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Mission;