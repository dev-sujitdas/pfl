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
    const yearsToEducation = educationAge - childAge;
    const inflatedAnnualCost =
      annualCost * Math.pow(1 + inflationRate / 100, yearsToEducation);
    const totalCost = inflatedAnnualCost * 3;
    const monthlyRate = 0.07 / 12;
    const months = yearsToEducation * 12;

    const futureValueCurrentSavings =
      currentSavings * Math.pow(1 + monthlyRate, months);

    const futureValueContributions =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const totalFutureValue =
      futureValueCurrentSavings + futureValueContributions;

    const shortfall = totalCost - totalFutureValue;

    let requiredMonthly = monthlyContribution;
    if (shortfall > 0) {
      const needed = totalCost - futureValueCurrentSavings;
      requiredMonthly =
        (needed * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    setResults({
      inflatedAnnualCost: inflatedAnnualCost.toFixed(2),
      totalCost: totalCost.toFixed(2),
      requiredMonthly: requiredMonthly.toFixed(2),
    });
  };

  const resetHandler = () => {
    setChildAge(5);
    setEducationAge(18);
    setAnnualCost(150000);
    setInflationRate(8);
    setCurrentSavings(0);
    setMonthlyContribution(0);

    setResults(null);
  };

  return (
    <div className="w-fit p-6 rounded-2xl shadow">
      <h2 className="text-3xl poppins-bold mb-4 text-amber-50">
        Education Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Child's Current Age:
          </label>
          <input
            type="number"
            value={childAge}
            onChange={(e) => setChildAge(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Age at Tertiary Education:
          </label>
          <input
            type="number"
            value={educationAge}
            onChange={(e) => setEducationAge(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Annual Education Cost (R):
          </label>
          <input
            type="number"
            value={annualCost}
            onChange={(e) => setAnnualCost(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Inflation Rate (%):
          </label>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Current Savings (R):
          </label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">
            Monthly Contribution (R):
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
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
            <strong>Future Annual Education Cost:</strong> R{" "}
            {results.inflatedAnnualCost}
          </p>
          <p>
            <strong>Total Tertiary Cost:</strong> R {results.totalCost}
          </p>
          <p>
            <strong>Suggested Monthly Savings:</strong> R{" "}
            {results.requiredMonthly}
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
