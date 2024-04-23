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
            {/* ====== carousel ====== */}
            <div 
            id='ourMission'
            className='relative'
            data-twe-carousel-init
            data-twe-carousel-slide>
                
                {/* ====== carousel items ====== */}
                <div className='relative w-full overflow-hidden after:clear-both after:block'>
                    <div 
                    className='relative float-left -me-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                    data-twe-carousel-active
                    data-twe-carousel-item>
                        <p className='absolute text-[24px] leading-[41px] text-[#5F5E6C] w-[533px] h-[128px] mt-8 md:mt-[130px]'>
                        To empower businesses through technology, creativity, and innovation, enabling 
                        them to achieve their goals and drive sustainable growth.
                        </p>
                    </div>
                </div>
                <div 
                className='absolute flex justify-between mt-12'
                data-twe-carousel-indicators>
                    <div className='self-start'>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" data-twe-target="#ourMission" data-twe-slide-to="0" data-twe-carousel-active aria-current="true" aria-label="Slide 1"/>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" data-twe-target="#ourMission" data-twe-slide-to="1" aria-label="Slide 2"/>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" data-twe-target="#ourMission" data-twe-slide-to="2" aria-label="Slide 3"/>
                        <input type="radio" className="form-radio text-blue-600 h-5 w-5 mx-1" data-twe-target="#ourMission" data-twe-slide-to="3" aria-label="Slide 4"/>
                    </div>
                    <div className='grid grid-cols-2 gap-6 mr-5'>
                        <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#ourMission"
                        data-twe-slide="prev">
                            <Image src={'/Vector-5.svg'} width={15.5} height={4} alt={''} />
                        </button>
                        <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-twe-target="#ourMission"
                        data-twe-slide="next">    
                            <Image src={'/Vector-3.svg'} width={15.5} height={4} alt={''} />
                        </button>
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