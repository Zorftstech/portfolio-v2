"use client";
import React from "react";
import { IService } from "@/lib/types";

export interface IServiceDetailProps {
  serviceDetails: IService | undefined;
}

<<<<<<< HEAD
const ServiceDetail: React.FC<IServiceDetailProps> = ({ serviceDetails }) => {
  console.log(serviceDetails);
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="serviceDetail w-full h-[441px] lg:h-[500px] mx-auto flex justify-center bg-cover bg-center">
        <div
          key={serviceDetails?.id}
          className="w-[380px] lg:w-[928px] h-[143px] lg:h-[156px] self-center text-center mt-28"
        >
          <h2 className="text-[32px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#004AAD]">
            {serviceDetails?.main_title}
          </h2>
          <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[31px] font-normal text-[#5F5E6C] mt-7">
            {serviceDetails?.main_description}
          </p>
=======
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
            <div className='serviceDetail w-[428px] lg:w-[1280px] h-[500px] lg:h-[600px] mx-auto flex justify-center bg-cover bg-center rounded-b-[35px] lg:rounded-b-[70px]'>
                <div key={service.id} className='w-[380px] lg:w-[928px] h-[143px] lg:h-[156px] self-center text-center mt-20'>
                    <h2 className='text-[30px] lg:text-[64px] leading-[45px] lg:leading-[80px] font-bold text-[#004AAD]'>{service.title}</h2>
                    <p className='text-[19.5px] lg:text-[20px] leading-[28px] lg:leading-[31px] font-normal text-[#5F5E6C] mt-5'>
                        At Zorft Technologies, we offer a comprehensive suite of services designed to elevate your brand and drive digital success.
                        Explore our range of expertise below.
                    </p>
                </div>
            </div>
>>>>>>> bb922532664b7968cdb886d1a3827d93b843a907
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
