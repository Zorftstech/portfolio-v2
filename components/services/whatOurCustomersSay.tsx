"use client";
import React from "react";
import TestimonialCard from "../home/testimonialCard";

const WhatOurCustomersSay: React.FC = () => {
	return (
		<div className="flex flex-col items-center lg:py-24 mt-10 lg:mt-40 w-full">

            <div className="hidden lg:block">
                {/* ============= Section description ============= */}
                <h3 className="text-[#004AAD] text-[28px] lg:text-[48px] leading-[38px] lg:leading-[55.2px] text-center font-bold mt-">
                What Our Customers Said
                </h3>
                <p className="text-xl text-[#5F5E6C] leading-[31px] text-center mt-3">
                Hear what some of our clients have said about our web design service
                </p>
            </div>
            
            <div className="mx-auto lg:py-24 mb-8 mt-16 lg:mt-40 w-full lg:hidden px-5">
                <div className="flex justify-start items-center">
                    <h4 className="text-center bg-[#F2F2F2] p-2 rounded-lg text-[#9C9AA1] w-[130px]">
                        Testimonials
                    </h4>
                </div>

                {/* ============= Section description ============= */}
                <h3 className="text-[#3B3D3F] text-2xl sm:text-2xl md:5xl lg:text-6xl leading-[38px] lg:leading-[82px] text-start font-bold mt-10">
                What they said about us <br className="hidden md:block"/> from the people we shared <br className="hidden md:block"/> experiences with.
                </h3>
            </div>

            <TestimonialCard />
        </div>

    )
}

export default WhatOurCustomersSay