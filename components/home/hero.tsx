import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
    return (
        <div className="mx-auto flex max-w-7xl items-center justify-center flex-col  p-24 my-8 lg:px-8">
            <h2 className='text-[82px] leading-[98px] font-semibold text-center tracking-tighter'>Unlocking possibilities<br/> through <span className='text-[#004AAD]'>technology</span></h2>
            <p className='text-[20px] leading-[33px] font-light text-center mt-4'>Empowering Businesses and individuals with cutting edge software solutions</p>
            <div className="flex items-center justify-center gap-4 mx-auto p-4 mb-8">
                
                <li className='w-200px py-3 px-5 border-[#bebebe] border-2 rounded-3xl flex items-center flex-row gap-2'>View our portfolio</li>
                <li className='w-200px py-3 px-5 text-white bg-[#004AAD] rounded-3xl flex items-center flex-row gap-2'><FaArrowRight /> Contact Us</li>
            </div>
            <div className=''>
                <Image src={'/hero-img.svg'} alt='Zorfts Technologies Ltd Projects' width={1200} height={800} />
            </div>
        </div>
    )
}

export default HeroSection