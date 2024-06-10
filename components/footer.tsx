"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from './data';

export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
        <div className="flex items-center justify-center flex-col px-6 lg:px-8 mt-0 bg-[#1B1B1E]">
            <div className="flex justify-center items-center flex-col text-[#fff] mt-[80px]">
                <p className='text-[26px] leading-4'>Subscribe to our newsletter</p>
                <div className='flex justify-center items-center flex-row gap-4 my-6'>
                    <input type='email' placeholder='Enter your email address' className='outline-none border-0 rounded-3xl py-3 px-8 w-[500px] bg-[#39393E]' />
                    <button className='w-300px py-3 px-5 text-white bg-[#004AAD] rounded-3xl flex items-center flex-row gap-2'> Submit</button>
                </div>
            </div>

            <hr className='w-[100%] bg-slate-50 my-8 ' />

            <div className='mx-auto max-w-7xl w-[100%] flex justify-between items-start gap-6 flex-row mt-[60px]'>
                <div className='w-[30%] flex justify-between items-start flex-col'>
                    <div className='flex justify-between items-start flex-col text-white'>
                        <Image src={'/zorfts-icon.svg'} alt='Zorfts Technologies Ltd Icon' height={50} width={50} objectFit='contain' />
                        <p className='text-[#D9D9D9] text-base leading-6 mt-6'>At Zorfts Technologies Ltd, our focus is on crafting bespoke software solutions aligned with the unique requirements and objectives of our clients. We thrive in conceptualizing and implementing groundbreaking software solutions that can grow with your business.</p>
                    </div>

                    <p className='text-white my-11'> © 2024 Zorfts Technologies Ltd. - All rights Reseved.</p>
                </div>

                <div className='w-[70%] flex justify-end items-start gap-6 flex-row sm:flex-column'>
                    {footerLinks.map((footerLink) => (
                        <div className='text-start text-[#D9D9D9] capitalize w-[20%]' key={footerLink.id}>
                            <p className='text-[#8F8F92] uppercase mb-8'>{footerLink.title}</p>
                            {footerLink.links.map((item, index) => (
                                <ul key={index}>
                                    <li className='text-[#D9D9D9] text-base font-normal leading-10 cursor-pointer'><Link style={{ cursor: 'pointer' }} href={item.link} target={item?.urlTarget}>{item.title}</Link></li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    ) 
}