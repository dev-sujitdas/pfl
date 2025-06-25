import React, { useRef, useState, useEffect } from "react";
import video40 from "/Video/40-50.mp4";
import video60 from "/Video/60+.mp4";
import video20 from "/Video/20-40.mp4";
import video50 from "/Video/50-60.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ageGroups = {
  "20-40": {
    video: video20,
    content: [
      {
        num: "01",
        title: "Getting Married",
        titleColor: "#f472b6",
        numColor: "#f9a8d4",
      },
      {
        num: "02",
        title: "First Home",
        titleColor: "#fb923c",
        numColor: "#fdba74",
      },
      {
        num: "03",
        title: "Having Children",
        titleColor: "#fde047",
        numColor: "#fef08a",
      },
      {
        num: "04",
        title: "Income Protection",
        titleColor: "#60a5fa",
        numColor: "#93c5fd",
      },
      {
        num: "05",
        title: "Debt Management",
        titleColor: "#64748b",
        numColor: "#94a3b8",
      },
      {
        num: "06",
        title: "Family Healthcare",
        titleColor: "#4ade80",
        numColor: "#86efac",
      },
    ],
    desc: {
      description:
        "You're building your career, growing your income, and possibly starting a family.",
    },
    sub: { subtitle: "Starting To Grow" },
  },
  "40-50": {
    video: video40,
    content: [
      {
        num: "01",
        title: "Protection of lifestyle",
        titleColor: "#facc15",
        numColor: "#fde68a",
      },
      {
        num: "02",
        title: "Healthcare",
        titleColor: "#34d399",
        numColor: "#6ee7b7",
      },
      {
        num: "03",
        title: "Investments",
        titleColor: "#3b82f6",
        numColor: "#93c5fd",
      },
      {
        num: "04",
        title: "Tax management",
        titleColor: "#f87171",
        numColor: "#fecaca",
      },
      {
        num: "05",
        title: "Inheritance",
        titleColor: "#c084fc",
        numColor: "#e9d5ff",
      },
      {
        num: "06",
        title: "Retirement planning",
        titleColor: "#f97316",
        numColor: "#fdba74",
      },
    ],
    desc: {
      description:
        "This is your consolidation phase — building comfort and planning for the long term.",
    },
    sub: { subtitle: "Establishing Roots" },
  },
  "50-60": {
    video: video50,
    content: [
      {
        num: "01",
        title: "Protection of assets",
        titleColor: "#fbbf24",
        numColor: "#fde68a",
      },
      {
        num: "02",
        title: "Debt elimination",
        titleColor: "#f87171",
        numColor: "#fecaca",
      },
      {
        num: "03",
        title: "Family healthcare",
        titleColor: "#34d399",
        numColor: "#a7f3d0",
      },
      {
        num: "04",
        title: "Helping your children",
        titleColor: "#60a5fa",
        numColor: "#bfdbfe",
      },
      {
        num: "05",
        title: "Retirement planning",
        titleColor: "#fb923c",
        numColor: "#fdba74",
      },
      {
        num: "06",
        title: "Wills and trusts",
        titleColor: "#a78bfa",
        numColor: "#ddd6fe",
      },
    ],
    desc: {
      description:
        "With 20+ years of retirement ahead, your priorities will reflect how well you’ve prepared.",
    },
    sub: { subtitle: "Pre-Retirement" },
  },
  "60+": {
    video: video60,
    content: [
      {
        num: "01",
        title: "Protection of assets",
        titleColor: "#fbbf24",
        numColor: "#fde68a",
      },
      {
        num: "02",
        title: "Age care planning",
        titleColor: "#818cf8",
        numColor: "#e0e7ff",
      },
      {
        num: "03",
        title: "Healthcare",
        titleColor: "#34d399",
        numColor: "#a7f3d0",
      },
      {
        num: "04",
        title: "Estate Tax Planning",
        titleColor: "#facc15",
        numColor: "#fcd34d",
      },
      {
        num: "05",
        title: "Gifting to family",
        titleColor: "#f87171",
        numColor: "#fecaca",
      },
      {
        num: "06",
        title: "Capital Protection",
        titleColor: "#a78bfa",
        numColor: "#ddd6fe",
      },
    ],
    desc: {
      description:
        "This is a time to enjoy travel and hobbies, cherish family moments, and plan your legacy.",
    },
    sub: { subtitle: "Enjoy Each Day" },
  },
};

const FinancialTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedAge, setSelectedAge] = useState("20-40");
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  const handleAgeClick = (age) => {
    if (age === selectedAge) return;
    setSelectedAge(age);
  };

  const mobileView = 768;
  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < mobileView);
    };

    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  const screen = 820;
  useEffect(() => {
    const checkResize = () => {
      setIsDesktop(window.innerWidth > screen);
    };
    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

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

  useEffect(() => {
    const titleAnimation = gsap.from(".timeline-top h2, .timeline-top h3", {
      scrollTrigger: {
        trigger: ".timeline-top",
        start: "top 90%",
        end: "top 50%",
      },
      y: 80,
      stagger: 0.2,
      ease: "power2.out",
    });

    const lineAnimationation = gsap.fromTo(
      ".timeline-top .line",
      { width: "0", x: "7rem" },
      {
        scrollTrigger: {
          trigger: ".timeline-top",
          start: "top 90%",
          end: "top 50%",
        },
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      }
    );

    const subtitleAnimation = gsap.from(".timeline-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".timeline-subtitle",
        start: "top 85%",
        end: "top 40%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    return () => {
      titleAnimation.scrollTrigger?.kill();
      lineAnimationation.scrollTrigger?.kill();
      subtitleAnimation.scrollTrigger?.kill();
    };
  }, []);

  useEffect(() => {
    const videoItemAnimation = gsap.from(".timeline-wrapper", {
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top 90%",
        end: "top 50%",
      },
      y: 60,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
    });

    const btnAnimation = gsap.from(".btn", {
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top 95%",
        end: "top 70%",

        // markers: true
      },
      opacity: 0,
      y: 40,
      ease: "expo.inOut",
    });

    return () => {
      videoItemAnimation.scrollTrigger?.kill();
      btnAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section id="timeline" className="w-full bg-[#2D2D2C] relative">
      <div
        id="f-timeline"
        className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#fdfdfd]"
      >
        <div className="timeline-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Financial Timeline
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-600">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>

        <div className="timeline-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Tailored financial strategies for every chapter of your life, backed
            by trusted expertise.
          </h3>
        </div>

        <div
          className={`timeline-wrapper flex ${
            isMobile && "flex-col"
          } justify-center items-center  mt-6 mb-10`}
        >
          <div
            className={`timeline-video w-1/2 ${
              isMobile && "w-full"
            } h-full rounded-2xl`}
          >
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
          <div className={`w-1/2 h-full  flex items-center justify-center`}>
            <div
              ref={contentRef}
              className="max-w-lg p-3 space-y-4 flex flex-col justify-center items-center"
            >
              {ageGroups[selectedAge].content.map((item, index) => (
                <div key={index}>
                  <div className="timeline-item flex justify-center items-center gap-5">
                    <h2
                      id="num2"
                      className={`lg:h-16 lg:w-16 h-10 w-10 lg:text-4xl text-xl poppins-semibold rounded-full flex justify-center items-center shadow-md`}
                      style={{ backgroundColor: item.numColor }}
                    >
                      {item.num}
                    </h2>
                    <h3
                      className="w-52 lg:w-64 text-lg lg:text-xl font-bold text-white lg:px-6 px-3 py-2 bg-red-400 rounded-r-full shadow-md"
                      style={{ backgroundColor: item.titleColor }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 xl:bottom-12 left-0 w-full flex justify-center gap-4 z-50">
          {Object.keys(ageGroups).map((range) => (
            <button
              key={range}
              onClick={() => handleAgeClick(range)}
              className={`btn px-2 md:px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 shadow-md 
                  ${
                    selectedAge === range
                      ? "bg-[#2C2B2B] text-white"
                      : "bg-gray-200"
                  }`}
            >
              <div>
                <h2>{isDesktop ? ageGroups[range].sub.subtitle : ""}</h2>
              </div>
              Age {range}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialTimeline;
