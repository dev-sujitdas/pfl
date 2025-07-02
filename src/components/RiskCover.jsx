import React from "react";

const ReasonBlock = ({ number, title, points }) => (
  <div className="flex flex-col md:flex-row gap-4 border-t-2 border-[#9e9797] nth-last-[1]:border-b-2 py-5 hover:bg-[#EEF4EA] text-amber-50 select-none">
    <h2 id="num2" className="text-6xl poppins-bold">
      {number}
    </h2>
    <div>
      <h3 className="text-2xl poppins-semibold text-zinc-600 mb-2">{title}</h3>
      <ul className="list-disc list-inside poppins-regular text-zinc-600 space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const RiskCover = () => {
  return (
    <div>
      <section className="bg-[#EEF4EA] w-full">
        <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#FDFDFD]">

           <div className="timeline-top flex justify-between items-center ">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Financial Advice
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-600">
                Secure a Risk Free Life for your family
              </h3>
            </div>
          </div>
        </div>
        <div className="timeline-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
             Navigating finances can be complex. We make it simple and strategic.
          </h3>
        </div>       

          <div className="mt-10">
            <h2 className="text-2xl md:text-4xl poppins-bold text-zinc-700 mb-4">
              Why Risk Cover Is Essential in South Africa?
            </h2>
            <p className="text-zinc-600 mb-10 lg:w-1/2 w-full poppins-medium-italic ">
              Risk cover protects individuals and families from financial
              devastation caused by unexpected events like death, disability, or
              serious illness. In South Africa, where economic and social
              challenges amplify financial vulnerabilities, adequate risk cover
              is not a luxury—it’s a necessity. Here’s why:
            </p>

            {/* Reasons */}
            <div>
              <ReasonBlock
                number="1"
                title="High Underinsurance Rates"
                points={[
                  "According to the Financial Planning Institute of Southern Africa (FPI), over 70% of South Africans are underinsured, leaving families exposed to significant financial risks.",
                  "Without sufficient life cover, dependents may struggle to cover daily expenses, debts (e.g., home loans averaging R1.8M in 2025), or future goals like education.",
                  "Disability and critical illness cover are often overlooked, yet 1 in 4 South Africans may face a disability before retirement, and chronic diseases like cancer are rising (Cancer Association of SA, 2025).",
                ]}
              />

              <ReasonBlock
                number="2"
                title="Economic Pressures"
                points={[
                  "South Africa’s economy faces challenges like rand volatility, inflation (4-5% in 2025), and high unemployment (27% in Q1 2025). These pressures make it harder for families to recover from financial shocks without insurance.",
                  "Rising costs—education (7-9% annual increase), healthcare (6-8% above CPI), and debt servicing—mean a loss of income can push families into poverty.",
                  "Example: A family with R30,000 monthly expenses needs R5.4M in life cover to sustain 15 years of support, yet many have less than R1M",
                ]}
              />

              <ReasonBlock
                number="3"
                title="Prevalence of Debt"
                points={[
                  "South Africans carry significant debt, with household debt-to-income ratios at 75% (SA Reserve Bank, 2025). Home loans, car loans, and credit card debt are common.",
                  "Without life cover, dependents inherit debt, often forcing asset sales (e.g., family homes) or reliance on high-interest loans.",
                  "Risk cover clears debts, preserving wealth and stability.",
                ]}
              />
              <ReasonBlock
                number="4"
                title="Limited Social Safety Nets"
                points={[
                  "Unlike some developed countries, South Africa has minimal government support for disability or dependants. The Disability Grant (R2,180/month in 2025) is insufficient to replace income.",
                  "Private risk cover bridges this gap, ensuring families maintain their lifestyle and meet obligations.",
                ]}
              />
              <ReasonBlock
                number="5"
                title="Health Risks and Medical Costs"
                points={[
                  "Chronic illnesses like diabetes, hypertension, and cancer are prevalent, with 100,000 new cancer cases annually (CANSA, 2025).",
                  "Medical aid often doesn’t cover non-medical costs (e.g., home modifications, lost income) during illness. Critical illness cover provides a lump sum to ease these burdens.",
                  "Example: A cancer diagnosis could cost R500,000–R1M in ancillary expenses over 5 years.",
                ]}
              />
            </div>
            <div className="flex justify-center lg:flex-row flex-col items-center mb-10">
              <div className="left lg:w-1/2 w-full flex justify-center items-center">
                <div className="mt-12 h-[30rem] w-[30rem] rounded-xl shadow-md">
                  <img
                    className="h-full w-full object-contain"
                    src="/Images/graph.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-center items-center flex-col lg:w-1/2 w-full">
                <div className="lg:w-1/2 w-full ">
                  <h3 className="text-2xl poppins-semibold text-gray-800 mb-4">
                    Take Action Now
                  </h3>
                  <p className="text-gray-600 mb-4 poppins-regular">
                    Use our free Financial Needs Analysis (FNA) tool to
                    calculate your risk cover gap and protect your family’s
                    future.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#2C2B2B] w-fit text-amber-50 px-6 py-3 rounded-full poppins-semibold hover:bg-[#BA8748] transition"
                  >
                    Start Your FNA Now
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl md:text-4xl poppins-bold text-[#2C2B2B] mb-4">
                Why Independent Financial Advice Matters in South Africa?
              </h2>
              <p className="text-zinc-600 mb-10 lg:w-1/2 w-full poppins-medium-italic ">
                Independent financial advice is critical to securing tailored,
                unbiased risk cover solutions. Unlike tied advisors who
                represent specific insurers, independent financial planners
                prioritize clients’ needs, offering objective guidance in a
                complex market. Here’s why independent advice is invaluable:
              </p>
            </div>
            <div>
              <ReasonBlock
                number="1"
                title="Unbiased Recommendations"
                points={[
                  "Independent planners are not affiliated with any single insurer, allowing them to compare products from multiple providers (e.g., Sanlam, Discovery, Momentum, Old Mutual).",
                  "They select policies based on your unique needs, budget, and goals, not sales targets or commissions.",
                  "Example: An independent planner might recommend a Discovery life policy for its rewards but a Momentum critical illness policy for better payouts, creating a hybrid solution.",
                ]}
              />
              <ReasonBlock
                number="2"
                title="Holistic Financial Planning"
                points={[
                  "Independent advisors integrate risk cover into a broader financial plan, considering retirement, investments, tax, and estate goals.",
                  "They ensure risk cover complements other strategies, like using Retirement Annuities (RAs) for tax savings or offshore investments to hedge against rand volatility.",
                  "This holistic approach avoids over-insurance or redundant policies, saving you money.",
                ]}
              />
              <ReasonBlock
                number="3"
                title="Tailored Solutions for South African Realities"
                points={[
                  "Independent planners understand local challenges: high debt, extended family obligations, and regulatory changes (e.g., SARS 2025 tax tables, FAIS compliance)",
                  "They customize cover to address these, such as structuring life policies to reduce estate duty or disability cover to match your occupation’s risks.",
                  "Example: For a self-employed entrepreneur, an independent advisor might prioritize income protection over lump-sum disability cover.",
                ]}
              />
              <ReasonBlock
                number="4"
                title="Access to Expertise and Accreditation"
                points={[
                  "Many independent planners hold Certified Financial Planner (CFP®) or Registered Financial Planner (RFP™) designations, ensuring high standards of expertise and ethics (FPI, 2025).",
                  "They stay updated on market trends, like new insurance products or changes to medical aid regulations, providing informed advice.",
                  "Their independence is regulated under the Financial Advisory and Intermediary Services Act (FAIS), ensuring transparency and accountability.",
                ]}
              />
              <ReasonBlock
                number="5"
                title="Cost-Effective Solutions"
                points={[
                  "Independent advisors negotiate competitive premiums and avoid unnecessary add-ons, maximizing value.",
                  "They review existing policies to eliminate overlaps, reducing costs without compromising protection.",
                  "Example: Consolidating two life policies into one with better terms could save R500/month.",
                ]}
              />
              <ReasonBlock
                number="6"
                title="Ongoing Support and Reviews"
                points={[
                  "Life changes—marriage, children, job transitions—require policy updates. Independent advisors provide regular reviews to ensure cover remains relevant.",
                  "They assist with claims, navigating complex processes to secure payouts (e.g., ASISA reported R550B in claims paid in 2024, but delays are common without expert help).",
                  "This long-term partnership builds trust and peace of mind.",
                ]}
              />
            </div>
            <div className="w-full text-center mt-4 ">              
              <h4 className="poppins-regular">
                <span  className="poppins-semibold ">Key Benefit:</span>
                &nbsp;Independent advisors act as your advocate, sourcing
                the best risk cover from South Africa’s competitive insurance
                market while aligning with your financial goals.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskCover;
