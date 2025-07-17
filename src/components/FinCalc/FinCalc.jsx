import React, { useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import RetirementCalc from "../FinCalc/RetirementCalc";
import EducationCalc from "../FinCalc/EducationCalc";
import InvestmentCalc from "../FinCalc/InvestmentCalc";
import TaxCalc from "../FinCalc/TaxCalc";
// import FinancialQuiz from "../FinCalc/FinancialQuiz";

const FinCalc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Retirement");

  const handleClick = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Retirement":
        return <RetirementCalc />;
      case "Education":
        return <EducationCalc />;
      case "Investment":
        return <InvestmentCalc />;
      case "Tax":
        return <TaxCalc />;
      // case "Financial Quiz":
      //   return <FinancialQuiz />;
      default:
        return null;
    }
  };

  const tabs = [
    "Retirement",
    "Education",
    "Investment",
    "Tax",
    // "Financial Quiz",
  ];

  return (
    <>
    <div className="fixed lg:bottom-5 lg:right-5 bottom-0.5 right-0.5 z-[999] lg:h-[7rem] lg:w-[7rem] h-[4.5rem] w-[4.5rem] lg:bg-[url('/Images/CalculateFinance.png')] bg-cover bg-center rounded-full flex items-center justify-center">
      <button
        onClick={handleClick}
        className="z-[999] lg:h-[4rem] lg:w-[4rem] h-[2.8rem] w-[2.8rem] rounded-full bg-amber-50 shadow-md flex items-center justify-center  text-5xl cursor-pointer"
      >
        {isOpen ? <IoMdClose /> : <FcCalculator />}
      </button>
    </div>

      {isOpen && (
        <div className="fin-calc fixed bottom-0 left-0 right-5 lg:h-screen h-[100svh] w-full xl:p-[7rem] px-2 pt-[6rem] bg-[#EEF4EA] z-888 flex flex-col ">
          {/* Tabs */}
          <div className="flex flex-wrap  gap-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`lg:px-4 lg:py-2 px-2 py-1 rounded-full lg:text-base text-sm poppins-regular border-2 ${
                  activeTab === tab
                    ? "bg-[#BA8748] text-amber-50"
                    : "bg-zinc-700 text-amber-50 hover:bg-[#BA8748]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="fincalc-render flex-grow bg-zinc-800 p-5 rounded-xl mb-1 md:mb-0">
            {renderTabContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default FinCalc;
