import React from "react";

const SomeOfOurWork: React.FC = () => {
  return (
    <div className="mx-auto flex items-center justify-center flex-col my-12">
      <h2
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        sm:leading-[55px] md:leading-[70px] lg:leading-[90px]
        font-bold text-[#E2E2E2] text-center my-6 mt-10"
      >
        Here are some of our works
      </h2>
      <p className="text-lg lg:text-xl leading-[28px] lg:leading-[40px] font-normal text-[#9897A7] text-center mt-4 lg:w-[900px]">
        At Zorft Technologies, we believe in the power of collaboration. Our
        strategic partnerships play a pivotal role in driving innovation and
        delivering exceptional solutions to our clients.
      </p>
    </div>
  );
};

export default SomeOfOurWork;
