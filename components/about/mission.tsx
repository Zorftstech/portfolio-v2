import Image from 'next/image';
import React from 'react'

const Mission: React.FC = ()=> {
  return (
    <div>
       <div className='mx-auto flex flex-col items-center justify-center max-w-7xl p-24 pt-0 my-8 lg:px-8 w-full'>
        <div className='grid md:grid-cols-2 w-full'>
            <div className=''>
                <h4 className='text-[26px] leading-[23px] text-[#8F8F92] w-[117px] h-[23px]'>Mission</h4>
                <h2 className='text-[48px] leading-[64px] font-bold text-[#004AAD] w-full h-[128px] mt-8'>Our Mission is pretty straightforward</h2>
            </div>
            <div className=''>
                <p className='text-[24px] leading-[41px] text-[#5F5E6C] w-[533px] h-[128px] mt-8 md:mt-[130px]'>
                To empower businesses through technology, creativity, and innovation, enabling 
                them to achieve their goals and drive sustainable growth.
                </p>
                <div className='flex justify-between mt-12'>
                    <div className='self-start'>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" checked/>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" />
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" />
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" />
                    </div>
                    <div className='grid grid-cols-2 gap-6 mr-5'>
                        <Image src={'/Vector-5.svg'} width={15.5} height={4} alt={''} />
                        <Image src={'/Vector-3.svg'} width={15.5} height={4} alt={''} />
                    </div>
                </div>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-10 md:gap-0 mt-60'>
            <div className=''>
                <h2 className='text-[48px] leading-[80px] font-bold text-[#004AAD]'>Values</h2>
                <p className='text-[20px] leading-[30px] text-[#5F5E6C] lg:w-[390px] lg:h-[150px]'>
                    Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis 
                    arcu. Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan 
                    imperdiet in neque et
                </p>
            </div>
            <ul className='list-disc grid md:grid-cols-2 gap-10 md:gap-24 ml-5 md:ml-0'>
                <li className='text-[20px] leading-[31px] text-[#5F5E6C] lg:w-[287px] lg:h-[124px]'>
                <h4 className='font-bold'>Excellence</h4>  
                    <p>Striving for excellence in everything we do.</p>
                </li>
                <li className='text-[20px] leading-[31px] text-[#5F5E6C] lg:w-[287px] lg:h-[124px]'>
                <h4 className='font-bold'>Collaboration</h4>  
                    <p>Fostering collaborative relationships with clients, partners, and team members.</p>
                </li>
                <li className='text-[20px] leading-[31px] text-[#5F5E6C] lg:w-[287px] lg:h-[124px]'>
                    <h4 className='font-bold'>Innovation</h4>  
                    <p>Innovation Embracing creativity and innovation to solve complex challenges.</p>
                </li>
                <li className='text-[20px] leading-[31px] text-[#5F5E6C] lg:w-[287px] lg:h-[124px]'>
                    <h4 className='font-bold'>Integrity</h4>  
                    <p>Operating with honesty, transparency, and integrity in all our interactions.</p>
                </li>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Mission;