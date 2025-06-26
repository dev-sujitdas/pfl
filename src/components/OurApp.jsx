import React, { useEffect } from "react";
import finance from "/Images/finance-app.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurApp = () => {
  useEffect(() => {
    const titleAnimation = gsap.from(".app-top h2, .app-top h3", {
      scrollTrigger: {
        trigger: ".app-top",
        start: "top 90%",
        end: "top 50%",
      },
      y: 80,
      stagger: 0.2,
      ease: "power2.out",
    });

    const lineAnimationation = gsap.fromTo(
      ".app-top .line",
      { width: "0", x: "7rem" },
      {
        scrollTrigger: {
          trigger: ".app-top",
          start: "top 90%",
          end: "top 50%",
        },
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      }
    );

    const subtitleAnimation = gsap.from(".app-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".app-subtitle",
        start: "top 85%",
        end: "top 40%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from([".app-subtitle", ".app-para", ".app-img"], {
      scrollTrigger: {
        trigger: ".app-wrapper",
        start: "top 70%",
        end: "top 30%",
      },
      y: 60,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
    });

 

    return () => {
      titleAnimation.scrollTrigger?.kill();
      lineAnimationation.scrollTrigger?.kill();
      subtitleAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section id="app" className="w-full  bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#fdfdfd] relative">
        <div className="app-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Our App
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
        <div className="app-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Managing your financial portfolio has never been so easy
          </h3>
        </div>
        <div className="app-wrapper w-full flex lg:flex-row flex-col-reverse justify-center items-center">
          <div className="left lg:h-[30rem] lg:w-1/2 w-full flex flex-col justify-center ">
            <h4 className="app-subtitle text-zinc-400 text-lg md:text-xl poppins-regular-italic">
              Find out more about our app:
            </h4>
            <div className="app-para my-4 text-medium md:text-lg xl:w-[80%] poppins-regular text-zinc-700">
              <p>
                Our app offers clients state-of-the-art, automated,
                customizable, and consolidated reporting. In addition to robust
                reporting, it provides intelligent advice on key financial
                matters such as cash flow management, risk assessment, and
                return analysis—powered by our built-in business intelligence
                tool. With the Elite Wealth App, we curate tailored solutions to
                meet your unique financial needs, making everyday financial
                tasks effortless.
              </p>
              <h3 className="poppins-semibold mt-4"> Want to learn more? </h3>
              <p>Don't hesitate to get in touch—we're here to help.</p>
            </div>
          </div>
          <div className="absolute w-30 h-30 blur-[120px] bg-[#3d742b] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
          <div className="right lg:w-1/2 w-full">
            <div className="app-img h-[20rem] lg:h-[35rem] w-full flex justify-center items-center">
              <img className="h-full" src={finance} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApp;
