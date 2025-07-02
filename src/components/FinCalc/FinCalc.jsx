import React, { useState } from "react";
import { FcCalculator } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import RetirementCalc from "../FinCalc/RetirementCalc"
import EducationCalc from "../FinCalc/EducationCalc"
import InvestmentCalc from "../FinCalc/InvestmentCalc"
import TaxCalc from "../FinCalc/TaxCalc"
import FinancialQuiz from "../FinCalc/FinancialQuiz"


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
      case "Financial Quiz":
        return <FinancialQuiz />;
      default:
        return null;
    }
  };

  const tabs = ["Retirement", "Education", "Investment", "Tax", "Financial Quiz"];

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-5 right-5 z-999 text-5xl p-2 rounded-full bg-[#FDFDFD] shadow-md cursor-pointer"
      >
        {isOpen ? <IoMdClose /> : <FcCalculator />}
      </button>

      {isOpen && (
        <div className="fin-calc fixed bottom-0 left-0 right-5 h-screen w-full p-[7rem] bg-zinc-900 z-888 flex flex-col rounded-2xl">
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-medium poppins-regular border-2 ${
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
          <div className="flex-grow overflow-auto bg-zinc-800 p-6 rounded-xl">
            {renderTabContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default FinCalc;
