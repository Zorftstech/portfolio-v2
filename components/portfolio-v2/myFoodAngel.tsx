import React from 'react';
import Image from 'next/image';

const MyFoodAngels: React.FC = () => {
    return (
        <div className="mx-auto flex max-w-7xl items-star justify-center flex-col mt-24 px-8 lg:px-12 w-full">
            <div className='lg:w-[1100px] lg:h-[193px]'>
                <h2 className='text-[32px] lg:text-[72px] leading-[45px] lg:leading-[80px] font-bold text-[#E2E2E2]'>MyFoodAngels</h2>
                <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[40px] font-normal text-[#9897A7] mt-10 lg:w-[900px]'>
                    At Zorft Technologies, we believe in the power of collaboration. Our strategic 
                    partnerships play a pivotal role in driving innovation and delivering exceptional 
                    solutions to our clients.
                </p>
            </div>
        </div>
    )
}

export default MyFoodAngels