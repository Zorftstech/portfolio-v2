import React from "react";
import Spinner from "./spinner";

const FullScreenLoader = () => {
  return (
    <div className="w-full fixed h-[100dvh] flex justify-center items-center bg-slate-100 inset-0">
      <div className="flex justify-center items-center flex-col">
        <Spinner />
        <p className="md:text-lg text-[#5F5E6C]">
          Loading
          <span className="animate-ping  delay-100">.</span>
          <span className="animate-ping delay-200">.</span>
          <span className="animate-ping delay-300">.</span>
        </p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
