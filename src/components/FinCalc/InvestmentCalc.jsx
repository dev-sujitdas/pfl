import React, { useState } from "react";

const InvestmentCalc = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(8);
  const [riskTolerance, setRiskTolerance] = useState("Balanced");

  const [results, setResults] = useState(null);

  const calculate = () => {   
    setResults();
  };

  return (
    <div className="w-fit p-6 rounded-2xl shadow">
      <h2 className="text-3xl poppins-bold mb-4 text-amber-50">
        Investment Growth Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Initial Investment (R):</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(+e.target.value)}
            className="bg-amber-50 p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Monthly Contribution (R):</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(+e.target.value)}
            className="bg-amber-50 p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Investment Horizon (Years):</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
            className="bg-amber-50 p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Expected Return Rate (%):</label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(+e.target.value)}
            className="bg-amber-50 p-2 rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Risk Tolerance:</label>
          <select
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(e.target.value)}
            className="bg-amber-50 p-2 rounded-xl"
          >
            <option value="Conservative">Conservative</option>
            <option value="Balanced">Balanced</option>
            <option value="Aggressive">Aggressive</option>
          </select>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-[#2D2D2C] text-amber-50 rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
        onClick={calculate}
      >
        Calculate
      </button>

      {results && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <p>
            <strong>Future Investment Value (Local):</strong> R 
          </p>
          <p>
            <strong>Capital Invested:</strong> R 
          </p>
          <p>
            <strong>Growth Earned:</strong> R 
          </p>
          <p>
            <strong>Estimated Offshore Return:</strong> R 
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalc;
