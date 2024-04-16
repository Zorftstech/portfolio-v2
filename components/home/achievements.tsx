import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AchievementsSection: React.FC = () => {
    return (
        <div className='mx-auto flex max-w-7xl items-center justify-center flex-col p-6 mb-8 lg:px-8'>
            <div className='flex justify-center items-center flex-row'>
                {/* =========== achievements texts =============== */}
                <div className='w-[50%]'>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#004AAD] sm:text-4xl">Here are some of our achievements</h2>
                    <p className="text-base font-extrabold text-gray">Below are some stats that shows our progress since we began offering our services</p>
                </div>

                {/* =================== achievements scores */}
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default AchievementsSection