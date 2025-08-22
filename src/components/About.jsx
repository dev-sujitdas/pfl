import React, { useEffect, useState, useRef } from "react";
import sapling from "/Images/saplings.png";
import leaf from "/Icons/leaf.png";
import growth from "/Icons/growth.png";
import trust from "/Icons/trust.png";
import mirror from "/Icons/mirror.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaCaretRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaBullseye, FaMapMarkerAlt, FaHandshake, FaLaptop } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobileView = 768;

  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < mobileView);
    };
    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);


  const features = [
    {
      icon: <FaBullseye className="text-3xl text-[#1F2023]" />,
      title: "Personalised Strategies",
      desc: "Driven by your goals, not products.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#1F2023]" />,
      title: "Local Expertise",
      desc: "South African specialists who understand volatility, tax laws, and regulation.",
    },
    {
      icon: <FaHandshake className="text-3xl text-[#1F2023]" />,
      title: "Long-Term Relationships",
      desc: "Annual reviews and life-stage planning for lasting success.",
    },
    {
      icon: <FaLaptop className="text-3xl text-[#1F2023]" />,
      title: "Modern Platforms",
      desc: "Stay informed and engaged with digital tools tailored to you.",
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-top",
          start: "top 85%",
          end: "top 50%",
        },
      });

      tl.from(".about-top h2, .about-top h3", {
        y: 80,
        stagger: 0.2,
        ease: "power2.out",
        opacity: 0,
      }).from(
        ".about-top .line",
        {
          width: "0",
          x: "7rem",
          ease: "power2.out",
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".our-roots",
          start: "top 80%",
          end: "top 40%",
        },
      });

      tl.from(".our-roots", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }).from(
        ".sapling",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".core-value-card-wrapper", {
        scrollTrigger: {
          trigger: ".core-value-card-wrapper",
          start: "top 90%",
          end: "top 50%",
        },
        scale: 0.9,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 90%",
          end: "top 50%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

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
    <section id="about" className="w-full bg-[#FDFDFD] relative overflow-hidden">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#EEF4EA] relative ">
        <div className="about-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#2C2B2B]">
              About Us
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

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-5 md:mb-16 mt-5 md:mt-16 relative">
          <div className="w-full lg:w-[40%] relative our-roots">
            <h3 className="text-2xl font-bold mb-4 poppins-semibold text-zinc-600">
              Our Roots
            </h3>
            <p className="text-md 2xl:text-lg poppins-regular text-zinc-700 leading-relaxed z-20 select-none">
              Plan For Life is a financial service provider that has been
              operating since 1998. We are primarily focused on the creation and
              management of wealth assets for our clients. We are passionate
              about providing a holistic tailor made financial plan for each of
              clients. Client relationships are at the core of our business and
              we realise that each client requires a different plan depending on
              their life stage, We currently operate throughout the country with
              our HQ located in Umhlanga.
            </p>

            {/* <h3 className="text-2xl font-bold mb-4 poppins-semibold text-zinc-600">
              Who We Are
            </h3>
            <p className="text-md 2xl:text-lg poppins-regular text-zinc-700 leading-relaxed z-20 select-none">
              PFL Financial Advisors is an independent, boutique financial
              planning firm with offices in Durban, Cape Town, and Richards Bay.
              We specialise in long-term, client-centred strategies that are
              tailored to South African realities.
            </p>

            <h3 className="text-2xl font-bold mb-4 poppins-semibold text-zinc-600 mt-5">
              Our Mission
            </h3>
            <p className="text-md 2xl:text-lg poppins-regular text-zinc-700 leading-relaxed z-20 select-none">
              To give South Africans the confidence and clarity to build financial futures through personalised advice, smart tools, and a trusted relationship.
            </p> */}
            <h4 className="flex items-center text-lg poppins-semibold mt-5">
              <FaCaretRight />
              25 years of experience
            </h4>
            <h4 className="flex items-center text-lg poppins-semibold mt-5">
              <FaCaretRight />
              Operate throughout South Africa
            </h4>
            <div className="absolute w-20 h-15 blur-[150px] bg-[#50aa35] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
          </div>

          <img
            src={sapling}
            alt="Growing Sapling"
            className="sapling w-full lg:w-[40%] h-[20rem]"
          />

          <div className="absolute w-52 h-52 blur-[150px] bg-[#50aa35d0] top-[70%] right-1/3 -translate-x-1/2 -translate-y-[70%] z-10 rounded-full"></div>
        </div>

        <div className="w-full  mx-auto flex flex-wrap justify-center items-center gap-6 mb-16 text-center">
          {cardData.map(({ icon, title, para }, index) => (
            <div
              key={index}
              className="core-value-card-wrapper p-0 z-50 max-w-[20rem]"
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
          <div
            className={`flex gap-6 ${
              isMobile
                ? "flex-nowrap overflow-x-auto overflow-y-hidden hide-scrollbar h-[18rem] snap-x snap-mandatory"
                : "flex-wrap justify-center"
            }`}
          >
            {testimonial.map(({ quote, name }, i) => (
              <div
                key={i}
                className={`testimonial-card snap-start shrink-0 z-50 ${
                  isMobile && i === 0 ? "pl-4" : ""
                }`}
              >
                <div className="max-w-72 h-fit  bg-[#FDFDFD] rounded-xl shadow-md p-6 flex flex-col justify-between hover:scale-105 transition select-none">
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

        <div className="absolute w-52 h-52 blur-[150px] bg-[#50aa35d0] bottom-20 left-28 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full"></div>
      </div>       
    </section>
  );
};

export default About;
