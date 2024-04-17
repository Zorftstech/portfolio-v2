import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AchievementsSection: React.FC = () => {
    return (
        <div className='mx-auto flex max-w-7xl items-center justify-center flex-col p-6 mb-8 lg:px-8'>
            <div className='flex justify-center items-start flex-row w-[100%]'>
                {/* =========== achievements texts =============== */}
                <div className='w-[50%]'>
                    <h2 className="text-[64px] leading-[72px] font-semibold text-[#004AAD] mb-2">Here are some of our achievements</h2>
                    <p className="text-base text-gray ">Below are some stats that shows our progress since we began offering our services</p>
                </div>

                {/* =================== achievements scores */}
                <div className='w-[50%] grid grid-cols-2 gap-4 text-[#fff]'>
                    <div className='w-[303px] h-[340px] bg-[#336EBD] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6'>
                        <div className='text-[#fff]'>
                            <h2 className='text-[64px]'>2018</h2>
                            <p>Founded</p>
                        </div>

                        <div>
                            <p>Below are some stats that shows our progress since we began offering our services</p>
                        </div>
                    </div>
                    <div className='w-[303px] h-[340px] bg-[#5486C8] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6'>
                        <div className='text-[#fff]'>
                            <h2 className='text-[64px]'>50+</h2>
                            <p>Projects</p>
                        </div>

                        <div>
                            <p>Below are some stats that shows our progress since we began offering our services</p>
                        </div>
                    </div>
                    <div className='w-[303px] h-[340px] bg-[#00439D] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6'>
                        <div className='text-[#fff]'>
                            <h2 className='text-[64px]'>20+</h2>
                            <p>Staffs</p>
                        </div>

                        <div>
                            <p>Below are some stats that shows our progress since we began offering our services</p>
                        </div>
                    </div>
                    <div className='w-[303px] h-[340px] bg-[#8AACD9] rounded-3xl flex justify-between items-start flex-col text-start px-4 py-6'>
                        <div className='text-[#fff]'>
                            <h2 className='text-[64px]'>100+</h2>
                            <p>Happy clients</p>
                        </div>

                        <div>
                            <p>Below are some stats that shows our progress since we began offering our services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementsSection