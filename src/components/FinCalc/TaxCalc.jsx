import React, { useState } from "react";

const TaxCalculator = () => {
  const [income, setIncome] = useState(300000);
  const [contribution, setContribution] = useState(30000);
  const [taxYear, setTaxYear] = useState(2025);

  const [results, setResults] = useState(null);

  const calculate = () => {
    
    let taxRate = 0;
    if (income <= 237100) taxRate = 0.18;
    else if (income <= 370500) taxRate = 0.26;
    else if (income <= 512800) taxRate = 0.31;
    else if (income <= 673000) taxRate = 0.36;
    else if (income <= 857900) taxRate = 0.39;
    else if (income <= 1817000) taxRate = 0.41;
    else taxRate = 0.45;

    const deductionLimit = income * 0.275;
    const allowableDeduction = Math.min(contribution, deductionLimit);
    const taxSavings = allowableDeduction * taxRate;
    const effectiveReturn = ((taxSavings / allowableDeduction) * 100).toFixed(2);

    setResults({
      reducedIncome: income - allowableDeduction,
      taxSavings: taxSavings.toFixed(2),
      effectiveReturn,
    });
  };

  const resetHandler = () => {
    setIncome(300000);
    setContribution(30000);
    setTaxYear(2025);

    setResults(null);
  };

  return (
    <div className="w-fit p-6 rounded-2xl shadow">
      <h2 className="text-3xl poppins-bold mb-4 text-amber-50">
        Tax Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Annual Taxable Income (R):</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">RA/TFSA Contributions (R):</label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 poppins-regular">Tax Year:</label>
          <select
            value={taxYear}
            onChange={(e) => setTaxYear(+e.target.value)}
            className="bg-[#FDFDFD] p-2 rounded-xl"
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </select>
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
            <strong>Taxable Income After Deduction:</strong> R {results.reducedIncome.toLocaleString()}
          </p>
          <p>
            <strong>Estimated Annual Tax Savings:</strong> R {results.taxSavings}
          </p>
          <p>
            <strong>Effective Return on Contribution:</strong> {results.effectiveReturn}%
          </p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
