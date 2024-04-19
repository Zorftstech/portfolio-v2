import Image from 'next/image';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className='mx-auto flex flex-col items-center justify-center max-w-7xl p-6 my-8 lg:px-8 w-full'>
        <h2 className='text-4xl lg:text-7xl font-bold text-[#004AAD] text-center mb-8 lg:mb-12'>Services that we provide</h2>
        <p className='text-lg lg:text-xl text-[#5F5E6C] mt-4 lg:mt-5 text-center lg:px-36'>
            Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
            Purus tempus lectus imperdiet egestas libero et sit mauris. Quam accumsan imperdiet 
            in neque et
        </p>
        <div className='overflow-x-scroll lg:overflow-visible mt-8 lg:mt-20 w-9/12 lg:w-full'>
          <div className='grid grid-cols-6 lg:grid-cols-3 gap-x-96 lg:gap-10 lg:w-full'>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>Website design</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>Mobile App Development</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>IT Solution</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0  min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>Brand design</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>Graphic design</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>
            <div className='border-2 rounded-xl border-gray-200 px-5 py-8 mb-6 lg:mb-0 min-w-[344px] transition ease-in delay-150 lg:hover:bg-[#00439D] duration-300'>
              <h4 className='text-xl lg:text-2xl font-bold text-gray-700 mb-4'>IT Consultancy</h4>
              <p className='text-sm lg:text-base text-[#5F5E6C]'>
                Lorem ipsum dolor sit amet consectetur. Quam libero tellus egestas convallis arcu. 
                Purus tempus lectus imperdiet egestas libero et sit mauris.
              </p>
              <div className='flex justify-between w-2/5 lg:w-1/3 mt-5'>
                <Image src={'/Vector-3.svg'} alt='' width={15.5} height={4} />
                <span className='text-[#424247]'>Learn More</span>
              </div>
            </div>  
          </div>
        </div>
    </div>
  );
}

export default Services;
