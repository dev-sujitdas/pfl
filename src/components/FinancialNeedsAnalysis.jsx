import React, { useState, useEffect } from "react";

const FinancialNeedsAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [age, setAge] = useState(30);
  const [dependents, setDependents] = useState(2);
  const [monthlyExpenses, setMonthlyExpenses] = useState(30000);
  const [debts, setDebts] = useState(500000);
  const [savings, setSavings] = useState(200000);

  const [yourIncome, setYourIncome] = useState(40000);
  const [partnerIncome, setPartnerIncome] = useState(20000);
  const [otherIncome, setOtherIncome] = useState(5000);

  const [lifeCover, setLifeCover] = useState(1000000);
  const [disabilityCover, setDisabilityCover] = useState(500000);
  const [criticalCover, setCriticalCover] = useState(300000);
  const [medicalAid, setMedicalAid] = useState("Yes");
  const [provider, setProvider] = useState("Discovery");

  const [lifeGap, setLifeGap] = useState(null);
  const [disabilityGap, setDisabilityGap] = useState(null);
  const [criticalGap, setCriticalGap] = useState(null);

  const calculateGaps = () => {    
    setLifeGap();
    setDisabilityGap();
    setCriticalGap();
  };

  return (
    <>
      <section className="w-full relative">
        <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] pt-[7rem] lg:pt-0 md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#EEF4EA] ">
          <div className="client-top flex justify-between items-center">
            <div className="lg:h-[3.5rem] h-[4.5rem] overflow-hidden flex items-center">
              <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
                Financial Needs Analysis
              </h2>
            </div>
            <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
              <div className="hidden lg:w-28 md:block">
                <div className="line w-5 lg:w-28 h-1 bg-[#52525c]"></div>
              </div>
              <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
                <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-600">
                  Steps to your financial freedom
                </h3>
              </div>
            </div>
          </div>
          <div className="client-subtitle">
            <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-500">
             A simple assessment to help you identify potential financial shortfalls in times of crisis.
            </h3>
          </div>
          <h3 className="text-center text-zinc-700 poppins-semibold text-xl mt-5">Complete this assessment to see if your family is protected in the            
              event of unexpected life events.</h3>

          <div className="w-full flex flex-col lg:flex-row justify-center gap-10 mt-5">
            <div className="left flex flex-col gap-5">
              <div>
                <label className="text-zinc-800 poppins-regular">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Number of Dependents
                </label>
                <input
                  type="number"
                  value={dependents}
                  onChange={(e) => setDependents(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Monthly Household Expenses (R)
                </label>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Outstanding Debts (R)
                </label>
                <input
                  type="number"
                  value={debts}
                  onChange={(e) => setDebts(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Current Savings/Investments (R)
                </label>
                <input
                  type="number"
                  value={savings}
                  onChange={(e) => setSavings(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Your Monthly Income (R)
                </label>
                <input
                  type="number"
                  value={yourIncome}
                  onChange={(e) => setYourIncome(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Partner's Monthly Income (R)
                </label>
                <input
                  type="number"
                  value={partnerIncome}
                  onChange={(e) => setPartnerIncome(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
            </div>

            <div className="right flex flex-col gap-5">
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Other Income (R)
                </label>
                <input
                  type="number"
                  value={otherIncome}
                  onChange={(e) => setOtherIncome(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Current Life Cover (R)
                </label>
                <input
                  type="number"
                  value={lifeCover}
                  onChange={(e) => setLifeCover(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Current Disability Cover (R)
                </label>
                <input
                  type="number"
                  value={disabilityCover}
                  onChange={(e) => setDisabilityCover(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Current Critical Illness Cover (R)
                </label>
                <input
                  type="number"
                  value={criticalCover}
                  onChange={(e) => setCriticalCover(+e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                />
              </div>
              <div>
                <label className="text-zinc-800 poppins-regular">
                  Medical Aid
                </label>
                <select
                  value={medicalAid}
                  onChange={(e) => setMedicalAid(e.target.value)}
                  className="bg-white p-2 rounded-xl w-full"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {medicalAid === "Yes" && (
                <div>
                  <label className="text-zinc-800 poppins-regular">
                    Provider
                  </label>
                  <input
                    type="text"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="bg-white p-2 rounded-xl w-full"
                  />
                </div>
              )}

              <button
                onClick={calculateGaps}
                className="w-fit mt-6 px-4 py-2 bg-[#2D2D2C] text-white poppins-regular rounded-full border-2 poppins-regular hover:bg-[#BA8748]"
              >
                Calculate Cover Gaps
              </button>

              {(lifeGap !== null ||
                disabilityGap !== null ||
                criticalGap !== null) && (
                <div className="mt-6 bg-gray-100 p-4 rounded-xl">
                  <h3 className="text-xl mb-2">Risk Cover Gap Summary</h3>
                  <p>
                    <strong>Life Cover Gap:</strong> R{" "}                    
                  </p>
                  <p>
                    <strong>Disability Cover Gap:</strong> R{" "}                    
                  </p>
                  <p>
                    <strong>Critical Illness Cover Gap:</strong> R{" "}                    
                  </p>
                  <p className="mt-2 text-sm italic">
                    These are estimates. For tailored advice, speak to a
                    certified financial planner.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialNeedsAnalysis;
