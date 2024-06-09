import React from 'react'
import { servicesData } from '../data';

const ServiceDetail: React.FC = () => {
    return(
        <div className='w-100%'>
            <div className='serviceDetail w-[428px] lg:w-[1280px] h-[224px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center'>
            {servicesData.slice(0, 1).map((service, index) => ( 
                <div key={service.id} className='w-[380px] lg:w-[928px] h-[143px] lg:h-[156px] self-center text-center mt-28'>
                    <h2 className='text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#004AAD]'>{service.title}</h2>
                    <p className='lg:text-[20px] lg:leading-[31px] font-normal text-[#5F5E6C] mt-7'>
                        At Zorft Technologies, we offer a comprehensive suite of services designed to elevate your brand and drive digital success. 
                        Explore our range of expertise below.
                    </p>
                </div>
                ))}
            </div>
        </div>
    )
}


export default ServiceDetail;