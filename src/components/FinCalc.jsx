import React from "react";
import { FcCalculator } from "react-icons/fc";


const FinCalc = () => {
  return (
    <>
      <div className="fixed lg:bottom-5 lg:right-5 bottom-0.5 right-0.5 z-[999] lg:h-[7rem] lg:w-[7rem] h-[4.5rem] w-[4.5rem] lg:bg-[url('/Images/CalculateFinance.png')] bg-cover bg-center rounded-full flex items-center justify-center">
        <a target="_blank" href="https://unrivaled-croissant-309f65.netlify.app/">
        <button          
          className="z-[999] lg:h-[4rem] lg:w-[4rem] h-[2.8rem] w-[2.8rem] rounded-full bg-amber-50 shadow-md flex items-center justify-center  text-5xl cursor-pointer"
        >
          <FcCalculator />
        </button>
        </a>
      </div>              
    </>
  );
};

export default FinCalc;
