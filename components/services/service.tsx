"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { servicesData, Service } from '../data';

const ServiceDetailContent: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('title');
    console.log(id)
    const [service, setService] = useState<Service>(servicesData[0]);

    useEffect(() => {
        if (id && typeof id === 'string') {
            const currentService = servicesData.find(service => service.title === id);
            if (currentService) {
                setService(currentService);
            }
        }
    }, [id]);

    return (
        <div className='mx-auto flex max-w-7xl items-center justify-center flex-col w-100%'>
            <div className='serviceDetail w-[428px] lg:w-[1280px] h-[441px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center'>
                <div key={service.id} className='w-[380px] lg:w-[928px] h-[143px] lg:h-[156px] self-center text-center mt-28'>
                    <h2 className='text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#004AAD]'>{service.title}</h2>
                    <p className='text-[18px] lg:text-[20px] leading-[28px] lg:leading-[31px] font-normal text-[#5F5E6C] mt-7'>
                        At Zorft Technologies, we offer a comprehensive suite of services designed to elevate your brand and drive digital success.
                        Explore our range of expertise below.
                    </p>
                </div>
            </div>
        </div>
    );
};

const ServiceDetail: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ServiceDetailContent />
        </Suspense>
    );
};

export default ServiceDetail;
