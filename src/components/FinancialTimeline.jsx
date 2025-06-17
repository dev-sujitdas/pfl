import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import video40 from '/Video/40-50.mp4'
import video60 from '/Video/60+.mp4'
import video20 from '/Video/20-40.mp4'
import video50 from '/Video/50-60.mp4'

const ageGroups = {

  "20-40": {
    video: video20,
    content: [
      { num: "01", title: "Getting Married", titleColor: "#f472b6", numColor: "#f9a8d4" },
      { num: "02", title: "First Home", titleColor: "#fb923c", numColor: "#fdba74" },
      { num: "03", title: "Having Children", titleColor: "#fde047", numColor: "#fef08a" },
      { num: "04", title: "Income Protection", titleColor: "#60a5fa", numColor: "#93c5fd" },
      { num: "05", title: "Debt Management", titleColor: "#64748b", numColor: "#94a3b8" },
      { num: "06", title: "Family Healthcare", titleColor: "#4ade80", numColor: "#86efac" },
    ],
    desc: { description: "You're building your career, growing your income, and possibly starting a family." },
    sub: {subtitle: "Starting To Grow"}
  },
  "40-50": {
    video: video40,
    content: [
      { num: "01", title: "Protection of lifestyle", titleColor: "#facc15", numColor: "#fde68a" },
      { num: "02", title: "Healthcare", titleColor: "#34d399", numColor: "#6ee7b7" },
      { num: "03", title: "Investments", titleColor: "#3b82f6", numColor: "#93c5fd" },
      { num: "04", title: "Tax management", titleColor: "#f87171", numColor: "#fecaca" },
      { num: "05", title: "Inheritance", titleColor: "#c084fc", numColor: "#e9d5ff" },
      { num: "06", title: "Retirement planning", titleColor: "#f97316", numColor: "#fdba74" },      
    ],
    desc: { description: "This is your consolidation phase — building comfort and planning for the long term." },
    sub: {subtitle: "Establishing Roots"}
  },
  "50-60": {
    video: video50,
    content: [
      { num: "01", title: "Protection of assets", titleColor: "#fbbf24", numColor: "#fde68a" },
      { num: "02", title: "Debt elimination", titleColor: "#f87171", numColor: "#fecaca" },
      { num: "03", title: "Family healthcare", titleColor: "#34d399", numColor: "#a7f3d0" },
      { num: "04", title: "Helping your children", titleColor: "#60a5fa", numColor: "#bfdbfe" },
      { num: "05", title: "Retirement planning", titleColor: "#fb923c", numColor: "#fdba74" },
      { num: "06", title: "Wills and trusts", titleColor: "#a78bfa", numColor: "#ddd6fe" },      
    ],
    desc: { description: "With 20+ years of retirement ahead, your priorities will reflect how well you’ve prepared." },
    sub: {subtitle: "Pre-Retirement"}
  },
  "60+": {
    video: video60,
    content: [
      { num: "01", title: "Protection of assets", titleColor: "#fbbf24", numColor: "#fde68a" },
      { num: "02", title: "Age care planning", titleColor: "#818cf8", numColor: "#e0e7ff" },
      { num: "03", title: "Healthcare", titleColor: "#34d399", numColor: "#a7f3d0" },
      { num: "04", title: "Estate Tax Planning", titleColor: "#facc15", numColor: "#fcd34d" },
      { num: "05", title: "Gifting to family", titleColor: "#f87171", numColor: "#fecaca" },
      { num: "06", title: "Capital Protection", titleColor: "#a78bfa", numColor: "#ddd6fe" },      
    ],
    desc: { description: "This is a time to enjoy travel and hobbies, cherish family moments, and plan your legacy." },
    sub: {subtitle: "Enjoy Each Day"}
  },
};

const FinancialTimeline = () => {
  
  const [selectedAge, setSelectedAge] = useState("20-40");
  const videoRef = useRef(null);
  const contentRef = useRef(null);  

  const handleAgeClick = (age) => {
    if (age === selectedAge) return;
    setSelectedAge(age);    
  };

useEffect(() => {
  gsap.fromTo(
    ".timeline-item", 
    { opacity: 0, x: -30 }, 
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
}, [selectedAge]);


  return (
    <section id="timeline" className="w-full bg-[#2D2D2C] relative">
      <div id="f-timeline" className="w-full max-w-[150rem] mx-auto p-[7rem] bg-[#fdfdfd] rounded-t-[5rem]">

         <div className="timeline-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#2C2B2B]">
              Financial Timeline
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

        <h3 className="mt-6 text-2xl poppins-regular-italic w-[30%] text-zinc-400">
          Tailored financial strategies for every chapter of your life, backed
          by trusted expertise.
        </h3>
        <div className="flex justify-center items-center  mt-6">
          {/* Left: Video */}
          <div className="w-1/2 h-full rounded-2xl">
            <video
              key={selectedAge}
              ref={videoRef}
              src={ageGroups[selectedAge].video}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover z-50 rounded-2xl"
            />
          </div>          
          <div className="w-1/2 h-full  flex items-center justify-center ">                        
            <div ref={contentRef} className="max-w-lg p-6 space-y-4 flex flex-col justify-center items-center">
              {ageGroups[selectedAge].content.map((item, index) => (
                <div key={index}>
                  <div className="timeline-item flex justify-center items-center gap-5">
                    <h2
                      id="num2" 
                      className={`h-16 w-16 text-4xl poppins-semibold rounded-full flex justify-center items-center shadow-md`}
                      style={{ backgroundColor: item.numColor }}
                    >
                      {item.num}
                    </h2>
                    <h3 
                    className="w-64 text-xl font-bold text-white px-5 py-3 bg-red-400 rounded-r-full shadow-md"
                    style={{ backgroundColor: item.titleColor }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
              {/* <div className="px-4 py-2 rounded-xl bg-[#EEF4EA] shadow-md">
                <p className="text-gray-600 text-lg poppins-regular-italic">
                {ageGroups[selectedAge].desc.description}
              </p>
              </div> */}              
            </div>
          </div>          
          <div className="absolute bottom-5 w-fit flex justify-center gap-4 z-50">
            {Object.keys(ageGroups).map((range) => (
              <button
                key={range}
                onClick={() => handleAgeClick(range)}
                className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 shadow-md ${
                  selectedAge === range
                    ? "bg-[#2C2B2B] text-white"
                    : "bg-gray-200"
                }`}
              >
                <div><h2>{ageGroups[range].sub.subtitle}</h2></div>
                Age {range}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTimeline;
