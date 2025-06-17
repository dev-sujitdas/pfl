import React, { useEffect } from "react";
import sapling from "/Images/saplings.png";
import leaf from "/Icons/leaf.png";
import growth from "/Icons/growth.png";
import trust from "/Icons/trust.png";
import mirror from "/Icons/mirror.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useScrollAnimation from "../hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useScrollAnimation();

  const cardData = [
    {
      icon: trust,
      title: "Trust",
      para: "Trust is the foundation of every lasting partnership we nurture.",
    },
    {
      icon: mirror,
      title: "Honesty",
      para: "We foster honest conversations that create meaningful, enduring bonds.",
    },
    {
      icon: leaf,
      title: "Sustainability",
      para: "Our commitment to sustainable values ensures lasting impact.",
    },
    {
      icon: growth,
      title: "Growth",
      para: "We guide steady, purpose-driven growth that endures over time.",
    },
  ];

  const testimonial = [
    {
      quote:
        "Amazing service and always available to help with any financial questions I have. Helped identify all aspects I should plan for.",
      name: "Monique",
    },
    {
      quote:
        "Plan For Life helped me get my financial planning on track. They are always willing to help and go the extra mile, when assisting their clients.",
      name: "Dominic",
    },
    {
      quote:
        "This is a great company to work with. We've trusted them for years with our entire family's financial planning and success.",
      name: "Jared",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#FDFDFD] relative">
      <div className="w-full max-w-[150rem] mx-auto p-[7rem] rounded-t-[5rem] bg-[#EEF4EA]">
        
        <div className="about-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#2C2B2B]">
              About Us
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#52525c]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-600">
                Plan Your Financial Future with PFL
              </h3>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 mt-16">
          <div className="md:w-[40%] relative our-roots">
            <h3 className="text-2xl font-bold mb-4 poppins-semibold text-zinc-600">
              Our Roots
            </h3>
            <p className="text-lg poppins-regular text-zinc-700 leading-relaxed z-20 select-none">
              Plan For Life is a financial service provider that has been
              operating since 1998. We are primarily focused on the creation and
              management of wealth assets for our clients. We are passionate
              about providing a holistic tailor made financial plan for each of
              clients. Client relationships are at the core of our business and
              we realise that each client requires a different plan depending on
              their life stage, We currently operate throughout the country with
              our HQ located in Umhlanga.
            </p>
            <h4 className="flex items-center text-lg poppins-semibold mt-5">
              <FaCaretRight />
              25 years of experience
            </h4>
            <h4 className="flex items-center text-lg poppins-semibold mt-5">
              <FaCaretRight />
              Operate throughout South Africa
            </h4>
            <div className="absolute w-30 h-30 blur-[150px] bg-[#50aa35] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
          </div>
          
          <img src={sapling} alt="Growing Sapling" className="sapling md:w-[40%] h-[25rem]" />
          
          <div className="absolute w-52 h-52 blur-[150px] bg-[#50aa35d0] top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
        </div>

        
        <div className="w-[80%] mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-16 text-center">
          {cardData.map(({ icon, title, para }, index) => (
            <div
              key={index}
              className="core-value-card-wrapper p-0 z-50" 
            >
              <div className="core-value-card p-5 shadow-md rounded-xl bg-[#FDFDFD] flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 select-none z-50">
                <div className="mb-3 h-14 w-14">
                  <img
                    src={icon}
                    className="h-full w-full object-cover"
                    alt={title}
                  />
                </div>
                <h4 className="text-xl poppins-semibold text-[#2C2B2B]">
                  {title}
                </h4>
                <p className="text-sm mt-1 poppins-light">{para}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div>
          <h3 className="text-2xl poppins-semibold text-center mb-10 text-[#2C2B2B]">
            What Our Clients Say
          </h3>
          <div className="flex justify-center flex-wrap gap-6 ">
            {testimonial.map(({ quote, name }, i) => (
              <div
                key={i}
                className="testimonial-card  z-999"
              >
                <div className="max-w-72 bg-[#FDFDFD] rounded-xl shadow-md p-6 flex flex-col justify-between hover:scale-105 transition select-none">
                <p className="poppins-semibold text-left text-lg">
                  <RiDoubleQuotesL />
                </p>
                <p className="poppins-light-italic mb-4">{quote}</p>
                <p className="font-semibold text-right">— {name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-52 h-52 blur-[150px] bg-[#50aa35d0] bottom-0 left-28 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
      </div>
    </section>
  );
};

export default About;
