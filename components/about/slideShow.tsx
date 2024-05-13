"use client"
import React, { useEffect, useState } from 'react';
import './slideShow.css'
import Image from 'next/image';
import { slides } from '../data';

const SlideShow: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const plusSlides = (n: number): void => {
    setActiveSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex >= slides.length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      return newIndex;
    });
  };

  const currentSlide = (index: number): void => {
    setActiveSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  return (
    <div className="flex flex-col lg:block relative lg:w-[663px] h-[573px] lg:h-[450px]">
      {/* Full-width slides/quotes */}
      {slides.map((slide, index) => (
        <div key={index} className={index === activeSlideIndex ? "block" : "block lg:hidden"}>
          <p className="text-[18px] lg:text-[24px] leading-[28px] lg:leading-[41px] text-[#5F5E6C] w-full h-[112px] lg:h-[128px] mt-8 lg:mt-[130px]">
            {slide.mission}
          </p>
        </div>
      ))}

      <div className='hidden lg:flex justify-between mt-12'>
        {/* Dots/bullets/indicators */}
        <div className="self-start dot-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === activeSlideIndex ? "dot active" : "dot"}
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>

        {/* Next/prev buttons */}
        <div className='hidden lg:grid grid-cols-2 gap-6 mr-16'>
          <a className="pre" onClick={() => plusSlides(-1)}>
            <Image src={'/Vector-5.svg'} width={15.5} height={4} alt={''} />
          </a>
          <a className="nex" onClick={() => plusSlides(1)}>
            <Image src={'/Vector-3.svg'} width={15.5} height={4} alt={''} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
