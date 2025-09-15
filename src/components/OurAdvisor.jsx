import React, { useState, useEffect, useRef } from "react";
import face1 from "/Images/face1.jpg";
import face2 from "/Images/face2.jpg";
import face3 from "/Images/face3.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advisorData = [
  {
    image: face1,
    name: "Gerrit Bezuidenhout",
    description:
      "Gerrit joined Sanlam in 1989 as a Legal Adviser and moved into management roles at Sanlam and Momentum from 1992 to 1998. In 1998, he co-founded PFL with Craig Shillaw. He holds an LLB from UNISA, a Postgraduate Diploma in Financial Planning from UFS, and is a CFP® professional.",
  },
  {
    image: face2,
    name: "Tihan Bezuidenhout",
    description:
      "Tihan began his career in 2012 as a Paraplanner at PFL, gaining broad experience in financial planning with a focus on personal finance and investment management. He holds a BCom and a Postgraduate Diploma in Financial Planning from the University of Stellenbosch, and is a CFP® professional.",
  },
  {
    image: face3,
    name: "Micky Alborough",
    description:
      "Micky began her career in financial services in 1976 with NBS Bank and achieved Executive Financial Planner status in 1984. She joined Plan for Life in 2000 and specializes in personal financial planning, serving a well-established client base in Durban.",
  },
  {
    image: face3,
    name: "Aleisha Bezuidenhout",
    description:
      "Aleisha, a Durban native, holds degrees in Social Dynamics (Stellenbosch, 2013) and Law (Free State, 2017). After completing her articles in Paarl, she was admitted as a legal practitioner in 2020 and later as a Conveyancer and Notary. She prides herself on delivering affordable, quality legal services.",
  },
];

const AdvisorMarquee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".advisor-card");
    const cardWidth = cards[0].offsetWidth + 24;
    const totalWidth = cardWidth * cards.length;

    gsap.to(container, {
      x: -totalWidth,
      duration: 50,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    return () => gsap.killTweensOf(container);
  }, []);

  const loopedAdvisors = [...advisorData, ...advisorData];

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-6 w-max"
      >
        {loopedAdvisors.map((data, index) => (
          <div key={index} className="advisor-card w-80 rounded-xl bg-[#fdfdfd] p-4 shadow-md shrink-0 z-50">
            <div className="p-4 rounded-xl bg-emerald-900">
              <h2 className="text-zinc-100 text-xl poppins-semibold">{data.name}</h2>
            </div>
            <p className="text-base mt-3 poppins-regular-italic">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const OurAdvisor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const mobileView = 768;
  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth <= mobileView);
    };

    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [isMobile]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".advisor-top",
          start: "top 70%",
          end: "top 30%",

        },
      });

      titleTimeline.from(".advisor-top h2, .advisor-top h3", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      });

      titleTimeline.fromTo(
        ".advisor-top .line",
        { width: "0", x: "7rem", opacity: 0 },
        {
          width: "7rem",
          x: "0",
          opacity: 1,
          ease: "power2.out",
        },
        "<"
      );

      gsap.from(".advisor-subtitle .subtitle", {
        scrollTrigger: {
          trigger: ".advisor-subtitle",
          start: "top 80%",
          end: "top 40%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".advisor-card", {
        scrollTrigger: {
          trigger: ".advisor-wrapper",
          start: "top 95%",
          end: "top 50%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="advisors" className="w-full h-full bg-[#FDFDFD]">
      <div
        className="w-full h-auto max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#EEF4EA] relative "
      >
        <div className="advisor-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Our Advisors
            </h2>
          </div>
          <div className="slogan flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-600">
                Plan Your Financial Future with PFL
              </h3>
            </div>
          </div>
        </div>

        <div className="advisor-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-xl 2xl:text-2xl poppins-regular-italic w-full xl:w-[40%] 2xl:w-[30%] text-zinc-400">
            Meet the experts behind your financial success.
          </h3>
        </div>
        <div className="advisor-container w-full mx-auto flex justify-center items-center mt-20">
          {isMobile ? (<AdvisorMarquee />) : (
            <div
              ref={containerRef}
              className={`advisor-wrapper flex gap-6 flex-wrap justify-center`}>
              {advisorData.map((data, index) => (
                <div key={index} className="advisor-card w-80 rounded-xl bg-[#fdfdfd] p-4 shadow-md snap-start shrink-0 z-50">
                  <div className="p-4 rounded-xl bg-emerald-900">
                    <h2 className="text-zinc-100 text-xl poppins-semibold">{data.name}</h2>
                  </div>
                  <p className="text-base mt-3 poppins-regular-italic">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurAdvisor;
