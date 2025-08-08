import React, { useState } from "react";

function futureValueLumpSum(PV, r, n) {
  return PV * Math.pow(1 + r, n);
}

function futureValueAnnuity(PMT, r, n) {
  if (r === 0) return PMT * n;
  return PMT * ((Math.pow(1 + r, n) - 1) / r);
}

const EducationCalculator = () => {
  const [childAge, setChildAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [programYears, setProgramYears] = useState(3);
  const [annualCostToday, setAnnualCostToday] = useState(150000);
  const [inflationRate, setInflationRate] = useState(8); 
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [annualReturn, setAnnualReturn] = useState(7); 

  const [results, setResults] = useState(null);

  const calculate = () => {
    const yearsToEducation = educationAge - childAge;
    const monthsToEducation = yearsToEducation * 12;
    const monthlyRate = annualReturn / 100 / 12;
    const inflation = inflationRate / 100;

    const inflatedAnnualCost =
      annualCostToday * Math.pow(1 + inflation, yearsToEducation);
    const totalProgramCost = inflatedAnnualCost * programYears;

    const fvCurrentSavings = futureValueLumpSum(
      currentSavings,
      monthlyRate,
      monthsToEducation
    );

    const fvContributions = futureValueAnnuity(
      monthlyContribution,
      monthlyRate,
      monthsToEducation
    );

    const totalFutureValue = fvCurrentSavings + fvContributions;

    const shortfall = totalProgramCost - totalFutureValue;

    let requiredMonthly = monthlyContribution;
    if (shortfall > 0) {
      requiredMonthly =
        (shortfall * monthlyRate) /
        (Math.pow(1 + monthlyRate, monthsToEducation) - 1);
    }

    setResults({
      inflatedAnnualCost: inflatedAnnualCost.toFixed(2),
      totalProgramCost: totalProgramCost.toFixed(2),
      totalFutureValue: totalFutureValue.toFixed(2),
      shortfall: shortfall > 0 ? shortfall.toFixed(2) : "0.00",
      requiredMonthly: requiredMonthly.toFixed(2),
    });
  };

  const resetHandler = () => {
    setChildAge(5);
    setEducationAge(18);
    setProgramYears(3);
    setAnnualCostToday(150000);
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
          <InputField
            label="Child's Current Age:"
            value={childAge}
            setter={setChildAge}
          />
          <InputField
            label="Higher Education Age:"
            value={educationAge}
            setter={setEducationAge}
          />
          <InputField
            label="Annual Education Cost Today (R):"
            value={annualCostToday}
            setter={setAnnualCostToday}
          />
          <InputField
            label="Program Duration (Years):"
            value={programYears}
            setter={setProgramYears}
          />
          <InputField
            label="Current Savings (R):"
            value={currentSavings}
            setter={setCurrentSavings}
          />
          <InputField
            label="Monthly Contribution (R):"
            value={monthlyContribution}
            setter={setMonthlyContribution}
          />
          <InputField
            label="Inflation Rate (%):"
            value={inflationRate}
            setter={setInflationRate}
          />
          <InputField
            label="Expected Annual Return (%):"
            value={annualReturn}
            setter={setAnnualReturn}
          />
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
        <div className="mt-6 bg-gray-100 md:text-lg text-base md:p-4 p-2 rounded-xl h-fit">
          <p>
            <strong>Future Annual Education Cost: R</strong>{" "}
            {Number(results.inflatedAnnualCost).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Total Higher Education Cost: R</strong>{" "}
            {Number(results.totalProgramCost).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Projected Future Value: R</strong>{" "}
            {Number(results.totalFutureValue).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Shortfall: R </strong>
            {Number(results.shortfall).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Suggested Monthly Savings: R </strong>{" "}
            {Number(results.requiredMonthly).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p className="text-sm italic text-gray-700 mt-2">
            Suggested vehicles: TFSAs, Unit Trusts
          </p>
        </div>
      )}
    </div>
  );
};

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
