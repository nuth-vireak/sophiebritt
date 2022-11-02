import React from "react";

import headerImageLeft from "./../assets/Frame11852.webp";
import headerComputerRight from "./../assets/computer.webp";

const Hero = () => {
  return (
    <div className="w-full h-[670px] flex justify-center">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <img src={headerImageLeft} alt="Frame11852" className="mr-20" />
          <div className="">
            <h1 className="text-8xl font-semibold text-orange-600 mb-5">
              Hello!
            </h1>
            <div className="flex justify-between items-center">
              <p className="text-5xl font-semibold leading-tight">
                I'm Sophie, a <br></br> product designer <br></br> based in New
                York.
              </p>
              <img src={headerComputerRight} alt="computer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
