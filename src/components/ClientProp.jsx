import React, { useEffect } from "react";
import agreement from "/Icons/agreement.png";
import analysis from "/Icons/analysis.png";
import clientInfo from "/Icons/clientInfo.png";
import introduction from "/Icons/introduction.png";
import monitor from "/Icons/monitor.png";
import presentation from "/Icons/presentation.png";
import relationship from "/Icons/relationship.png";
import implement from "/Icons/implement.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clientData = [
  {
    num: "01",
    icon: introduction,
    title: "Service Introduction",
    description:
      "We proudly introduce Plan for Life’s financial advisory and intermediary services, including our business and license details as required by the Financial Advisory and Intermediary Services Act.",
  },
  {
    num: "02",
    icon: clientInfo,
    title: "Client Information Gathering",
    description:
      "Our approach is entirely client-centered. To serve you effectively, we must first gain a complete understanding of your financial position, needs, and long-term goals.",
  },
  {
    num: "03",
    icon: relationship,
    title: "Relationship Establishment",
    description:
      "If we believe we can add value, we will formalize our relationship through a written client request, instruction, or engagement agreement, clearly outlining our roles and responsibilities.",
  },
  {
    num: "04",
    icon: analysis,
    title: "Financial Analysis & Planning",
    description:
      "Based on our agreement, we will conduct a thorough financial analysis and develop a customized, independent financial solution tailored to your needs and objectives.",
  },
  {
    num: "05",
    icon: presentation,
    title: "Solution Presentation",
    description:
      "Once the analysis is complete, we will present a detailed proposal outlining our recommended solutions. You will receive this written proposal for review and consideration.",
  },
  {
    num: "06",
    icon: agreement,
    title: "Client Agreement",
    description:
      "Should you choose to proceed, we will formalize our agreement in writing. This includes all instructions or accepted proposals, and you will be provided with signed copies for your records.",
  },
  {
    num: "07",
    icon: implement,
    title: "Implementation",
    description:
      "Following the agreement, we will implement the approved financial solutions in line with your instructions, ensuring all actions are executed accurately and efficiently.",
  },
  {
    num: "08",
    icon: monitor,
    title: "Ongoing Monitoring",
    description:
      "Our commitment goes beyond implementation. We provide ongoing monitoring, regular reporting, and continuous financial advice to ensure your plan stays aligned with your evolving needs.",
  },
];

const ClientProp = () => {
  useEffect(() => {
    const titleAnimation = gsap.from(".client-top h2, .client-top h3", {
      scrollTrigger: {
        trigger: ".client-top",
        start: "top 90%",
        end: "top 50%",
      },
      y: 80,
      stagger: 0.2,
      ease: "power2.out",
    });

    const lineAnimationation = gsap.fromTo(
      ".client-top .line",
      { width: "0", x: "7rem" },
      {
        scrollTrigger: {
          trigger: ".client-top",
          start: "top 90%",
          end: "top 50%",
        },
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      }
    );

    const subtitleAnimation = gsap.from(".client-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".client-subtitle",
        start: "top 85%",
        end: "top 40%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    const listAnimation = gsap.utils.toArray(".client-list").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 40%",
        },
        scale: 0.9,
        y: 40,
        opacity: 0,

        ease: "back.out(1.7)",
      });
    });

    return () => {
      titleAnimation.scrollTrigger?.kill();
      lineAnimationation.scrollTrigger?.kill();
      subtitleAnimation.scrollTrigger?.kill();
      listAnimation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section id="proposition" className=" w-full  bg-[#fdfdfd] relative">
      <div
        id="client-proposition"
        className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#EEF4EA]"
      >
        <div className="client-top flex justify-between items-center">
          <div className="lg:h-[3.5rem] h-[4.5rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              Client Value Proposition
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
            A personalized, step-by-step approach to securing your financial
            future with expert guidance at every stage
          </h3>
        </div>
        <div className="w-full mx-auto flex justify-center items-center flex-wrap mt-10">
          <div className="w-full mx-auto flex flex-wrap justify-center items-center lg:gap-10 gap-5">
            {clientData.map(({ num, icon, title, description }, index) => (
              <div key={index} className="client-list">
                <h2 id="num2" className="text-5xl poppins-semibold">
                  {num}
                </h2>
                <div className="p-5 w-[25rem] bg-[#FDFDFD] mt-3 rounded-2xl shadow-md hover:scale-105 transition-all select-none">
                  <div className=" flex flex-col justify-center items-center gap-3">
                    <h2 className="h-16 w-16">
                      <img
                        className="h-full w-full object-cover"
                        src={icon}
                        alt=""
                      />
                    </h2>
                    <h3 className="text-xl poppins-semibold text-[#2C2B2B]">
                      {title}
                    </h3>
                    <p className="poppins-regular text-sm text-zinc-600">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProp;
