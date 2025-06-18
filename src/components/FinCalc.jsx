import React, { useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const FinCalc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={() => handleClick()}
        className="fixed bottom-5 right-5 z-888 text-5xl p-2 rounded-full bg-[#FDFDFD] shadow-md cursor-pointer"
      >
        {isOpen ? <IoMdClose /> : <FcCalculator />}
      </button>
      {isOpen && (
        <div className="fin-calc fixed bottom-24 right-5 w-72 h-80 bg-amber-800 z-999  flex flex-col justify-between rounded-2xl">
          <div></div>
          <div className="h-0 bg-blue-50"></div>
        </div>
      )}
    </>
  );
};

export default FinCalc;
