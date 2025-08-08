import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import agreement from "/Icons/agreement.png";
import monitor from "/Icons/monitor.png";
import analysis from "/Icons/analysis.png";
import client from "/Icons/clientInfo.png";

const features = [
  {
    icon: analysis,
    title: "Personalised Strategies",
    desc: "Strategies Driven by your goals, not products.",
  },
  {
    icon: client,
    title: "Local Expertise",
    desc: "Specialists who understand volatility, tax laws, and regulation.",
  },
  {
    icon: agreement,
    title: "Long-Term Relationships",
    desc: "Annual reviews and life-stage planning for lasting success.",
  },
  {
    icon: monitor,
    title: "Modern Platforms",
    desc: "Stay informed and engaged with digital tools tailored to you.",
  },
];

const Diffrentiator = ({ lenis }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (target) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (lenis?.current) {
          lenis.current.scrollTo(target);
        }
      }, 400);
    } else {
      if (lenis?.current) {
        lenis.current.scrollTo(target);
      }
    }
  };

  return (
    <section id="diffrentiator" className="w-full bg-[#EEF4EA] relative">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#fdfdfd] ">
        <div className="timeline-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl poppins-semibold text-[#2C2B2B]">
              What Makes Us Different
            </h2>
          </div>
        </div>

        <div className="absolute w-30 h-30 blur-[150px] bg-[#50aa35] top-1/2 left-20 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center mt-20 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[#EEF4EA] shadow-md rounded-xl flex justify-center items-center flex-col max-w-[20rem] hover:scale-105 transition-transform duration-300 select-none z-50"
              >
                <div className="mb-3 h-14 w-14">
                  <img
                    src={item.icon}
                    className="h-full w-full object-cover"
                    alt={item.title}
                  />
                </div>
                <h3 className="text-lg poppins-semibold mb-2 text-[#1F2023]">
                  {item.title}
                </h3>
                <p className="text-sm poppins-light text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={()=>handleScroll("#advisors")}
            className="px-8 py-3 border-2 border-[#2C2B2B] text-[#2C2B2B] rounded-full font-medium hover:bg-[#50aa35d0] hover:border-[#fdfdfd] hover:text-white transition"
          >
            Meet the Team
          </button>
          <button
            href="#contact"
            className="px-8 py-3 bg-[#2C2B2B] text-white rounded-full font-medium hover:bg-[#50aa35d0] transition"
          >
            Schedule a Consultation
          </button>
        </div>

        <div className="lg:w-1/2 mt-10">
          <h2 className="text-3xl lg:text-4xl poppins-semibold text-zinc-600 mb-5">
            More Than Just Algorithms
          </h2>
          <p className="mb-6 leading-relaxed text-gray-800 poppins-regular">
            Digital tools can track your money—but they can’t understand your
            goals, your fears, or your vision. At PFL, we combine human insight
            with smart technology to give you real advice, in real time,
            tailored to your life.
          </p>
          <p className="leading-relaxed text-gray-800 poppins-regular">
            While AI and robo-advisors can automate tasks, they can’t truly
            understand your unique story. We believe that meaningful financial
            planning requires both insight and empathy—qualities that only come
            from a personal relationship with a trusted advisor.
          </p>
        </div>
        <div className="absolute w-52 h-52 blur-[150px] bg-[#50aa357e] top-[80%] right-20 -translate-x-1/2 -translate-y-[80%] z-10 rounded-full"></div>
      </div>
    </section>
  );
};

export default Diffrentiator;
