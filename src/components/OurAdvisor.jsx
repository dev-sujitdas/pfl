import React from "react";
// import ScrollAnimation from "../hooks/useScrollAnimation";

const OurAdvisor = () => {
  // ScrollAnimation();

  return (
    <section id="advisors" className="w-full  bg-[#2D2D2C]">
      <div className="w-full max-w-[150rem] mx-auto p-[7rem] bg-[#EEF4EA] rounded-t-[5rem]">

        <div className="advisor-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#2C2B2B]">
              Our Advisors
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-600">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>
        <div className="advisor-subtitle">
          <h3 className="subtitle mt-6 text-2xl poppins-regular-italic w-[30%] text-zinc-400">
         Meet the experts behind your financial success.
        </h3>
        </div>

      </div>
    </section>
  );
};

export default OurAdvisor;
