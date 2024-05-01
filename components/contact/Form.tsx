import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FormSection: React.FC = () => {
    return (
        <div className='mx-auto max-w-7xl  p-24 lg:px-8 mb-8 '>
            <div className='bg-[#004AAD] rounded-xl p-10 flex justify-start items-start gap-8 text-[#8AACD9] w-[1000px] pt-[60px]–'>
                <h3 className='text-[32px] font-semibold leading-10 text-white'>Send us a <br />message</h3>

                <form className='flex justify-start items-center gap-6 flex-col'>
                    {/*  =========== subject ============  */}
                    <input type="text" placeholder='Subject' className='bg-[transparent] capitalize outline-none border-b-2 border-[#8AACD9] w-[700px]' />


                    {/*  ============= message inout ============== */}
                    <input type='email' placeholder='Email Address' className='bg-[transparent] capitalize outline-none border-b-2 border-[#8AACD9] w-[700px] my-10' />

                    {/* =============== Message =================  */}
                    <textarea className='bg-[transparent] capitalize outline-none border-b-2 border-[#8AACD9] w-[700px]'>Your Message</textarea>

                    <button className='bg-[#E6EDF7] flex justify-center items-center gap-4 w-200px py-3 px-5 rounded-3xl text-[#000] my-10'>
                        <Image src={'/vector-3.svg'} alt='icon' width={15.5} height={4} /> Contact Us
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormSection;