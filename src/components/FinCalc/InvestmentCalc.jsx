import React, { useState } from "react";

const InvestmentCalc = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(8);

  const [results, setResults] = useState(null);

  const calculate = () => {
    const rate = returnRate / 100 / 12;
    const months = years * 12;

    const futureValueInitial = initialAmount * Math.pow(1 + rate, months);
    const futureValueMonthly =
      monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate);
    const totalFutureValue = futureValueInitial + futureValueMonthly;
    const totalContributed = initialAmount + monthlyContribution * months;
    const growth = totalFutureValue - totalContributed;

    const offshoreRate = (returnRate + 1) / 100 / 12;
    const offshoreValueInitial =
      initialAmount * Math.pow(1 + offshoreRate, months);
    const offshoreValueMonthly =
      monthlyContribution *
      ((Math.pow(1 + offshoreRate, months) - 1) / offshoreRate);
    const totalOffshoreValue = offshoreValueInitial + offshoreValueMonthly;

    setResults({
      totalFutureValue: totalFutureValue.toFixed(2),
      capital: totalContributed.toFixed(2),
      growth: growth.toFixed(2),
      offshore: totalOffshoreValue.toFixed(2),
    });
  };

  const resetHandler = () => {
    setInitialAmount(10000);
    setMonthlyContribution(1000);
    setYears(10);
    setReturnRate(8);

    setResults(null);
  };

  return (
    <div className="w-fit p-0 md:p-6 rounded-2xl shadow">
      <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
        Investment Growth Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 md:text-base text-sm poppins-regular">
            Initial Investment (R):
          </label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(+e.target.value)}
            className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 md:text-base text-sm poppins-regular">
            Monthly Contribution (R):
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
            className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 md:text-base text-sm poppins-regular">
            Investment Horizon (Years):
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 md:text-base text-sm poppins-regular">
            Expected Return Rate (%):
          </label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(+e.target.value)}
            className="bg-[#FDFDFD] md:text-base text-sm md:p-2 p-1 rounded-xl"
          />
        </div>
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

      {results && (
        <div className="mt-6 bg-gray-100 md:text-lg text-base md:p-4 p-2 rounded-xl">
          <p>
            <strong>Future Investment Value (Local): R</strong> {" "}
            {Number(results.totalFutureValue).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Capital Invested: R</strong> {" "}
            {Number(results.capital).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Growth Earned: R</strong> {" "}
            {Number(results.growth).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
          <p>
            <strong>Estimated Offshore Return: R</strong> {" "}
            {Number(results.offshore).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalc;
