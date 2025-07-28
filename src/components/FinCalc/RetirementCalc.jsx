import React, { useState } from "react";

const RetirementSavingsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [growthRate, setGrowthRate] = useState(10);
  const [postRetirementRate, setPostRetirementRate] = useState(8);
  const [inflationRate, setInflationRate] = useState(5);
  const [spendRetireMonthlyToday, setSpendRetireMonthlyToday] = useState(35000);

  const [results, setResults] = useState(null);

  const calculate = () => {
    const age_now = currentAge;
    const age_retire = retirementAge;
    const years_to_retire = age_retire - age_now;
    const months_to_retire = years_to_retire * 12;
    const years_in_retirement = lifeExpectancy - age_retire;

    const return_pre = growthRate / 100;
    const return_post = postRetirementRate / 100;
    const inflation = inflationRate / 100;

    const real_return_pre = (1 + return_pre) / (1 + inflation) - 1;
    const real_return_post = (1 + return_post) / (1 + inflation) - 1;

    const FV_curr = currentSavings * Math.pow(1 + return_pre, years_to_retire);

    const FV_cont =
      monthlyContribution *
      ((Math.pow(1 + return_pre / 12, months_to_retire) - 1) /
        (return_pre / 12));

    const FV_total = FV_curr + FV_cont;

    const spend_retire_monthly =
      spendRetireMonthlyToday * Math.pow(1 + inflation, years_to_retire);
    const W = spend_retire_monthly * 12;

    let PV_needed = 0;
    if (real_return_post === 0) {
      PV_needed = W * years_in_retirement;
    } else {
      PV_needed =
        (W * (1 - Math.pow(1 + real_return_post, -years_in_retirement))) /
        real_return_post;
    }

    const shortfall = FV_total - PV_needed;

    setResults({
      totalSavingsAtRetirement: FV_total.toFixed(2),
      retirementCorpusNeeded: PV_needed.toFixed(2),
      shortfallOrSurplus: shortfall.toFixed(2),
      status: shortfall >= 0 ? "Surplus" : "Shortfall",
    });
  };

  const resetHandler = () => {
    setCurrentAge(30);
    setRetirementAge(65);
    setLifeExpectancy(85);
    setCurrentSavings(0);
    setMonthlyContribution(0);
    setGrowthRate(10);
    setPostRetirementRate(8);
    setInflationRate(5);
    setSpendRetireMonthlyToday(35000);
    setResults(null);
  };

  return (
    <div className="w-fit lg:p-6 p-0 rounded-2xl flex flex-col xl:flex-row xl:gap-10 gap-3">
      <div>
        <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
          Retirement Savings Calculator
        </h2>

        <div className="flex flex-col flex-wrap justify-between gap-4">
          {[
            { label: "Current Age", value: currentAge, set: setCurrentAge },
            {
              label: "Planned Retirement Age",
              value: retirementAge,
              set: setRetirementAge,
            },
            {
              label: "Expected Lifespan",
              value: lifeExpectancy,
              set: setLifeExpectancy,
            },
            {
              label: "Current Savings (R)",
              value: currentSavings,
              set: setCurrentSavings,
            },
            {
              label: "Monthly Contribution (R)",
              value: monthlyContribution,
              set: setMonthlyContribution,
            },
            {
              label: "Inflation Rate (%)",
              value: inflationRate,
              set: setInflationRate,
            },
            {
              label: "Expected Annual return (Pre-retirement)",
              value: growthRate,
              set: setGrowthRate,
            },
            {
              label: "Expected Annual return (Post-retirement)",
              value: postRetirementRate,
              set: setPostRetirementRate,
            },
            {
              label: "Retirement Monthly Expenses (Today’s Value)",
              value: spendRetireMonthlyToday,
              set: setSpendRetireMonthlyToday,
            },
          ].map(({ label, value, set }, i) => (
            <div key={i} className="flex justify-between items-center gap-5">
              <label className="text-amber-50 md:text-base text-sm poppins-regular">
                {label}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => set(+e.target.value)}
                className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
              />
            </div>
          ))}
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
            <strong>Projected Retirement Savings: R</strong> {" "}
            {Number(results.totalSavingsAtRetirement).toLocaleString(
              undefined,
              { minimumFractionDigits: 2 }
            )}
          </p>
          <p>
            <strong>Retirement Corpus Needed: R</strong> {" "}
            {Number(results.retirementCorpusNeeded).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>{results.status}: R</strong> {" "}
            {Number(results.shortfallOrSurplus).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default RetirementSavingsCalculator;
