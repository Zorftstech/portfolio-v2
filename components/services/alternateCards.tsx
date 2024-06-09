"use client";
import React from "react";
import Image from "next/image";
import { servicesData, Service } from '../data';

const AlternateCard: React.FC = () => {
    // Find the service with the id 1
    const service: Service | undefined = servicesData.find(service => service.id === 1);

    return (
        <div className="mx-auto flex max-w-7xl items-center justify-center flex-col mt-28 p-24 my-8 lg:px-8">
            {service?.content.map((service, index) => (
                <div 
                    key={service.id} 
                    className="flex justify-between my-28" 
                    style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
                >
                    <div 
                    className="w-[520px]"
                    style={{ margin: index % 2 === 0 ? "0px 50px 0px 0px" : "0px 0px 0px 50px" }}
                    >
                        <h3 className="text-[40px] leading-[80px] text-[#3B3D3F] font-bold">{service.title}</h3>
                        <p className=" text-[20px] leading-[30px] text-[#5F5E6C] mt-5">{service.description}</p>
                        <button className="border-[3px] border-[#E6EDF7] p-[16px] rounded-[214px] flex flex-row items-center cursor-pointer mt-3">
                            <Image src="/vector-3.svg" alt="icon" width={15.5} height={4} />
                            <a href="/" className="text-[14px] leading-[16.1px] text-[#424247] ml-2">
                                Request Development Service
                            </a>
                        </button>
                    </div>
                    <Image src={service.img} alt={service.title} width={620} height={453} />
                </div>
            ))}
        </div>
    );
};

export default AlternateCard;
