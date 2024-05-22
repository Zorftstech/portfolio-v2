import React from 'react';
import Image from 'next/image';

const CardStack: React.FC = () => {
    return (
        <div className="mx-auto flex flex-col max-w-7xl items-start justify-center mt-12 lg:mt-20 px-8 lg:px-12 lg:w-full">
            <div className='flex flex-col lg:flex-row justify-between bg-[#313137] rounded-xl px-5 lg:px-10 lg:overflow-hidden lg:w-full'>
                <div className='flex flex-col justify-between max-w-[400px] lg:mr-[px] pr-[px]'>
                    <div>
                        <h2 className='text-[32px] leading-[36.8px] font-bold text-[#E2E2E2] mt-8 lg:mt-20'>MyFoodAngels</h2>
                        <h4 className='text-[20px] leading-[23px] font-bold text-[#C8C7CF] mt-3 lg:mt-6 mb-5 lg:mb-10'>E-commerce company</h4>
                        <p className='text-[14px] leading-[18px] font-normal text-[#9D9CA5]'>
                            Lorem ipsum dolor sit amet consectetur. Varius sed quis aliquet est sed. Amet 
                            ut nunc at sagittis sed id dui et massa. Et nec adipiscing vel neque aliquet 
                            vivamus ultrices. Pellentesque non pulvinar non diam arcu.
                        </p>
                    </div>
                    <div className='mb-5 hidden lg:block'>
                        <p className='inline-block text-[12px] leading-[37px] text-[#C8C7CF]'>Timeline <br /> <span className='text-[15px]'>3months</span></p>
                        <p className='inline-block text-[12px] leading-[37px] text-[#C8C7CF] ml-8'>date <br />  <span className='text-[15px]'>30th nov 2023</span></p>
                    </div>
                </div>
                <Image src={'myFoodAngels.svg'} alt={'MyFoodAngels'} width={348} height={327} className='object-cover rounded-xl my-7 lg:mt-[40px] lg:mb-[-10px]  lg:w-[663px] lg:h-[623px] col-span-2'/>
                <div className='mb-5 lg:mb-0 lg:hidden'>
                    <p className='inline-block text-[12px] leading-[30px] text-[#C8C7CF]'>Timeline <br /> <span className='text-[15px]'>3months</span></p>
                    <p className='inline-block text-[12px] leading-[30px] text-[#C8C7CF] ml-8'>date <br />  <span className='text-[15px]'>30th nov 2023</span></p>
                </div>
            </div>
            <div className='bg-[#313137] rounded-xl px-5 py-8 my-10'>
            <h2 className='text-[28px] lg:text-[48px] leading-[38px] lg:leading-[120px] font-bold text-[#E2E2E2]'>Problem Statement</h2>
                <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-normal text-[#9897A7] mt-4 lg:w-[px]'>
                    The totality of the steps taken to achieve this project is a lot but we have 
                    been able to break down the process. In all, this project was a fun one.
                </p>
            </div>
            <div className='bg-[#313137] rounded-xl px-5 py-8'>
            <h2 className='text-[28px] lg:text-[48px] leading-[38px] lg:leading-[120px] font-bold text-[#E2E2E2]'>What we did</h2>
                <p className='text-[18px] lg:text-[19px] leading-[28px] lg:leading-[28px] font-normal text-[#9897A7] mt-4 lg:w-[px]'>
                    The totality of the steps taken to achieve this project is a lot but we have 
                    been able to break down the process. In all, this project was a fun one.
                </p>
            </div>
        </div>
    )
}

export default CardStack