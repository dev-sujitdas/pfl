import React, { useState } from "react";

const EducationCalculator = () => {
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [annualCost, setAnnualCost] = useState(150000);
  const [inflationRate, setInflationRate] = useState(8);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);

  const [results, setResults] = useState(null);

  const calculate = () => {
    setResults();
  };

  return (
    <div className="w-fit lg:p-6 p-0 rounded-2xl">
      <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
        Education Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Child's Current Age:</label>
          <input
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Age at Tertiary Education:</label>
          <input
            type="number"
            value={educationAge}
            onChange={(e) => setEducationAge(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Annual Education Cost (R):</label>
          <input
            type="number"
            value={annualCost}
            onChange={(e) => setAnnualCost(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Inflation Rate (%):</label>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Current Savings (R):</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Monthly Contribution (R):</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-[#2D2D2C] text-amber-50 text-xs lg:text-base rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
        onClick={calculate}
      >
        Calculate
      </button>

      {results && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <p>
            <strong>Future Annual Education Cost:</strong> R 
          </p>
          <p>
            <strong>Total Tertiary Cost:</strong> R
          </p>
          <p>
            <strong>Suggested Monthly Savings:</strong> R 
          </p>
          <p className="text-sm italic text-gray-700 mt-2">
            Suggested vehicles: TFSAs, Unit Trusts
          </p>
        </div>
      )}
    </div>
  );
};

export default EducationCalculator;
