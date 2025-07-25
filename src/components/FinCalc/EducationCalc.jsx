import React, { useState } from "react";

const EducationCalculator = () => {
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [programYears, setProgramYears] = useState(3);
  const [annualCost, setAnnualCost] = useState(150000);
  const [inflationRate, setInflationRate] = useState(8);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(7);

  const [results, setResults] = useState(null);

  const calculate = () => {
    const yearsToEducation = educationAge - childAge;
    const monthsToEducation = yearsToEducation * 12;
    const monthlyRate = annualReturn / 100 / 12;

    const inflatedAnnualCost =
      annualCost * Math.pow(1 + inflationRate / 100, yearsToEducation);

    const totalCost = inflatedAnnualCost * programYears;

    const futureValueCurrentSavings =
      currentSavings * Math.pow(1 + monthlyRate, monthsToEducation);

    const futureValueContributions =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, monthsToEducation) - 1) / monthlyRate);

    const totalFutureValue =
      futureValueCurrentSavings + futureValueContributions;

    const shortfall = totalCost - totalFutureValue;

    let requiredMonthly = monthlyContribution;
    if (shortfall > 0) {
      requiredMonthly =
        (shortfall * monthlyRate) /
        (Math.pow(1 + monthlyRate, monthsToEducation) - 1);
    }

    setResults({
      inflatedAnnualCost: inflatedAnnualCost.toFixed(2),
      totalCost: totalCost.toFixed(2),
      totalFutureValue: totalFutureValue.toFixed(2),
      shortfall: shortfall > 0 ? shortfall.toFixed(2) : "0.00",
      requiredMonthly: requiredMonthly.toFixed(2),
    });
  };

  const resetHandler = () => {
    setChildAge(5);
    setEducationAge(18);
    setProgramYears(3);
    setAnnualCost(150000);
    setInflationRate(8);
    setCurrentSavings(0);
    setMonthlyContribution(0);
    setAnnualReturn(7);
    setResults(null);
  };

  return (
    <div className="w-fit lg:p-6 p-0 rounded-2xl flex flex-col xl:flex-row xl:gap-10 gap-3">
      <div>
        <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
          Education Savings Calculator
        </h2>

        <div className="flex flex-col flex-wrap justify-between gap-4">
          <InputField label="Child's Current Age:" value={childAge} setter={setChildAge} />
          <InputField label="Higher Education Age:" value={educationAge} setter={setEducationAge} />
          <InputField label="Program Duration (Years):" value={programYears} setter={setProgramYears} />
          <InputField label="Annual Education Cost (R):" value={annualCost} setter={setAnnualCost} />
          <InputField label="Inflation Rate (%):" value={inflationRate} setter={setInflationRate} />
          <InputField label="Expected Annual Return (%):" value={annualReturn} setter={setAnnualReturn} />
          <InputField label="Current Savings (R):" value={currentSavings} setter={setCurrentSavings} />
          <InputField label="Monthly Contribution (R):" value={monthlyContribution} setter={setMonthlyContribution} />
        </div>

        <div className="flex gap-4">
          <button
            className="mt-4 md:px-4 md:py-2 px-2 py-1 bg-[#2D2D2C] text-amber-50 md:text-base text-sm rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
            onClick={calculate}
          >
            Calculate
          </button>
          <button
            className="mt-4 md:px-4 md:py-2 px-2 py-1 bg-[#2D2D2C] text-amber-50 md:text-base text-sm rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
            onClick={resetHandler}
          >
            Reset
          </button>
        </div>
      </div>

      {results && (
        <div className="mt-6 bg-gray-100 md:text-base text-sm md:p-4 p-2 rounded-xl h-fit">
          <p>
            <strong>Future Annual Education Cost:</strong> R{" "}
            {results.inflatedAnnualCost}
          </p>
          <p>
            <strong>Total Higher Education Cost:</strong> R {results.totalCost}
          </p>
          <p>
            <strong>Projected Future Value:</strong> R {results.totalFutureValue}
          </p>
          <p>
            <strong>Shortfall:</strong> R {results.shortfall}
          </p>
          <p>
            <strong>Suggested Monthly Savings:</strong> R {results.requiredMonthly}
          </p>
          <p className="text-sm italic text-gray-700 mt-2">
            Suggested vehicles: TFSAs, Unit Trusts
          </p>
        </div>
      )}
    </div>
  );
};

// Helper input component to reduce repetition
const InputField = ({ label, value, setter }) => (
  <div className="flex justify-between items-center gap-5">
    <label className="text-amber-50 md:text-base text-sm poppins-regular">
      {label}
    </label>
    <input
      type="number"
      value={value}
      onChange={(e) => setter(+e.target.value)}
      className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
    />
  </div>
);

export default EducationCalculator;
