import React, { useState } from "react";

const TaxCalculator = () => {
  const [income, setIncome] = useState(300000);
  const [contribution, setContribution] = useState(30000);
  const [taxYear, setTaxYear] = useState(2025);

  const [results, setResults] = useState(null);

  const calculate = () => {   
    setResults();
  };

  return (
    <div className="w-fit lg:p-6 p-0 rounded-2xl shadow">
      <h2 className="lg:text-3xl text-xl poppins-bold mb-4 text-amber-50">
        Tax Savings Calculator
      </h2>

      <div className="flex flex-col flex-wrap justify-between gap-4">
        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Annual Taxable Income (R):</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">RA/TFSA Contributions (R):</label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center gap-5">
          <label className="text-amber-50 text-xs lg:text-base poppins-regular">Tax Year:</label>
          <select
            value={taxYear}
            onChange={(e) => setTaxYear(+e.target.value)}
            className="bg-amber-50 text-xs lg:text-base p-2 rounded-xl"
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
          </select>
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
            <strong>Taxable Income After Deduction:</strong> R 
          </p>
          <p>
            <strong>Estimated Annual Tax Savings:</strong> R 
          </p>
          <p>
            <strong>Effective Return on Contribution:</strong> 
          </p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
