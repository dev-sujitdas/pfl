import React, { useState } from "react";

const RetirementSavingsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [growthRate, setGrowthRate] = useState(6); 
  const [desiredIncomePercent, setDesiredIncomePercent] = useState(70);
  const [currentIncome, setCurrentIncome] = useState(50000);

  const [results, setResults] = useState(null);

  const calculate = () => {
    setResults();
  };

  return (
    <div className="w-fit lg:p-6 p-0 rounded-2xl">
      <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
        Retirement Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between  items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Current Age:</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Retirement Age:
          </label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Life Expectancy:
          </label>
          <input
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Current Savings:
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Monthly Contribution:
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Expected Annual Growth Rate (%):
          </label>
          <input
            type="number"
            value={growthRate}
            onChange={(e) => setGrowthRate(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Current Monthly Income:
          </label>
          <input
            type="number"
            value={currentIncome}
            onChange={(e) => setCurrentIncome(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">
            Desired Income in Retirement (% of current):
          </label>
          <input
            type="number"
            value={desiredIncomePercent}
            onChange={(e) => setDesiredIncomePercent(+e.target.value)}
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
            <strong>Projected Retirement Savings:</strong> R{" "}
          </p>
          <p>
            <strong>Shortfall/Surplus:</strong> R
          </p>
          <p>
            <strong>Suggested Monthly Contribution:</strong> R{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default RetirementSavingsCalculator;
