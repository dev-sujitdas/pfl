import React, { useState } from "react";

const RetirementSavingsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [growthRate, setGrowthRate] = useState(6); // % annually
  const [desiredIncomePercent, setDesiredIncomePercent] = useState(70);
  const [currentIncome, setCurrentIncome] = useState(50000);

  const [results, setResults] = useState(null);

  const calculate = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;
    const monthlyRate = growthRate / 100 / 12;

    // Future value of current savings
    const futureValueCurrentSavings =
      currentSavings * Math.pow(1 + monthlyRate, yearsToRetirement * 12);

    // Future value of monthly contributions
    const futureValueContributions =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, yearsToRetirement * 12) - 1) / monthlyRate);

    const totalSavingsAtRetirement =
      futureValueCurrentSavings + futureValueContributions;

    // Desired monthly income in retirement
    const desiredMonthlyIncome = currentIncome * (desiredIncomePercent / 100);
    const totalIncomeNeeded = desiredMonthlyIncome * 12 * yearsInRetirement;

    const shortfall = totalSavingsAtRetirement - totalIncomeNeeded;

    // Suggest new monthly contribution if shortfall exists
    let suggestedContribution = monthlyContribution;
    if (shortfall < 0) {
      const futureValueNeeded = totalIncomeNeeded - futureValueCurrentSavings;
      suggestedContribution =
        (futureValueNeeded * monthlyRate) /
        (Math.pow(1 + monthlyRate, yearsToRetirement * 12) - 1);
    }

    setResults({
      totalSavingsAtRetirement: totalSavingsAtRetirement.toFixed(2),
      shortfallOrSurplus: shortfall.toFixed(2),
      suggestedMonthlyContribution: suggestedContribution.toFixed(2),
    });
  };

  const resetHandler = () => {
    setCurrentAge(30);
    setRetirementAge(65);
    setLifeExpectancy(85);
    setCurrentSavings(0);
    setMonthlyContribution(0);
    setGrowthRate(6);
    setDesiredIncomePercent(70);
    setCurrentIncome(50000);

    setResults(null);
  };

  return (
    <div className="w-fit p-6 rounded-2xl shadow">
      <h2 className="text-3xl poppins-bold mb-4 text-amber-50">
        Retirement Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between  items-center gap-5">
          <label className="text-amber-50 poppins-regular">Current Age:</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Retirement Age:
          </label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Life Expectancy:
          </label>
          <input
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Current Savings:
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Monthly Contribution:
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Expected Annual Growth Rate (%):
          </label>
          <input
            type="number"
            value={growthRate}
            onChange={(e) => setGrowthRate(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Current Monthly Income:
          </label>
          <input
            type="number"
            value={currentIncome}
            onChange={(e) => setCurrentIncome(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center  gap-5">
          <label className="text-amber-50 poppins-regular">
            Desired Income in Retirement (% of current):
          </label>
          <input
            type="number"
            value={desiredIncomePercent}
            onChange={(e) => setDesiredIncomePercent(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          className="mt-4 px-4 py-2 bg-[#2D2D2C] text-amber-50 rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
          onClick={calculate}
        >
          Calculate
        </button>
        <button
          className="mt-4 px-4 py-2 bg-[#2D2D2C] text-amber-50 rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>

      {results && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <p>
            <strong>Projected Retirement Savings:</strong> R{" "}
            {results.totalSavingsAtRetirement}
          </p>
          <p>
            <strong>Shortfall/Surplus:</strong> R {results.shortfallOrSurplus}
          </p>
          <p>
            <strong>Suggested Monthly Contribution:</strong> R{" "}
            {results.suggestedMonthlyContribution}
          </p>
        </div>
      )}
    </div>
  );
};

export default RetirementSavingsCalculator;
