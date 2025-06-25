import React, { useState, useEffect } from "react";
import face1 from "/Images/face1.jpg";
import face2 from "/Images/face2.jpg";
import face3 from "/Images/face3.jpg";
import gsap from "gsap";
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
];

const OurAdvisor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileView = 1280;
  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth <= mobileView);
    };

    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  useEffect(() => {
    const titleAnimation = gsap.from(".advisor-top h2, .advisor-top h3", {
      scrollTrigger: {
        trigger: ".advisor-top",
        start: "top 90%",
        end: "top 50%",
      },
      y: 80,
      stagger: 0.2,
      ease: "power2.out",
    });

    const lineAnimationation = gsap.fromTo(
      ".advisor-top .line",
      { width: "0", x: "7rem" },
      {
        scrollTrigger: {
          trigger: ".advisor-top",
          start: "top 90%",
          end: "top 50%",
        },
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      }
    );

    const subtitleAnimation = gsap.from(".advisor-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".advisor-subtitle",
        start: "top 85%",
        end: "top 40%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    const advisorAnimation = gsap.from(".advisor-card", {
      scrollTrigger: {
        trigger: ".advisor-wrapper",
        start: "top 70%",
        end: "top 30%",
      },
      y: 60,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    return () => {
      titleAnimation.scrollTrigger?.kill();
      lineAnimationation.scrollTrigger?.kill();
      subtitleAnimation.scrollTrigger?.kill();
      advisorAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section id="advisors" className="w-full  bg-[#2D2D2C]">
      <div
        // id="advisor"
        className="w-full 2xl:h-screen max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#EEF4EA] relative"
      >
        <div className="advisor-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Our Advisors
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
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
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Meet the experts behind your financial success.
          </h3>
        </div>
        <div className="w-full mx-auto mt-10 flex justify-center items-center">
          <div
            className={`advisor-wrapper flex flex-wrap ${
              isMobile && "justify-center items-center"
            } gap-10 relative`}
          >
            {advisorData.map((item, index) => (
              <div
                key={index}
                className="advisor-card group w-72 2xl:w-80 rounded-2xl overflow-hidden bg-transparent"
              >
                <div className="w-full 2xl:h-96 h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out px-5 bg-[#2D2D2C] ${
                    isMobile
                      ? "opacity-100 max-h-full py-4"
                      : "opacity-0 max-h-0 py-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:py-4"
                  }`}
                >
                  <h2 className="text-lg text-white poppins-semibold mb-2">
                    {item.name}
                  </h2>
                  <p className="text-sm italic text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAdvisor;
