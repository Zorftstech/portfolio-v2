import React from 'react'
import Image from 'next/image';
import { sidePanel } from '../data';

interface sidePanelItems {
    id: number;
    img: string;  
    text: string;
  }

const SidePanel: React.FC = () => {
    return (
        <div className="mx-auto flex max-w-7xl items-star justify-between my-24 px-8 lg:px-12 w-full">
            <div className='ml-10'>
                <div className='flex justify-between w-[200px]'>
                    <div className='h-[430px] w-[3px] bg-[#363636]'>
                        <div className='w-[] h-[50px] bg-[#D1D1D1] mt-3'></div>
                    </div>
                    <div className='flex flex-col justify-between text-[24px] leading-[40px] text-[#68686C] font-bold py-5'>
                        <h4>Design</h4>
                        <h4>Development</h4>
                        <h4>Deployment</h4>
                    </div>
                </div>
            </div>
            <div className='grid gap-32 border-[1px] border-[#464649] rounded-3xl w-[687px] p-12'>
                {sidePanel.map((portfolio: sidePanelItems) => (
                    <div key={portfolio.id}>
                        <p className='text-[19px] leading-[29px] text-[#9897A7] w-[530px]'>
                            {portfolio.text}
                        </p>
                        <Image src={portfolio.img} alt='' width={596} height={463} className='mt-20' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidePanel