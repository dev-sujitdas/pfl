import retirement from "/Images/retirement.jpg";
import risk from "/Images/risk.jpg";
import tax from "/Images/tax.jpg";
import investment from "/Images/investment.jpg";
import estate from "/Images/estate.jpg";
import business from "/Images/business.jpg";
import health from "/Images/health.jpg";
import insurance from "/Images/insurance.jpg";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    num: "01",
    title: "Retirement Planning",
    description:
      "PFL combines the expertise of tax planning and investment strategy, to ensure that the optimal retirement plan is followed. With inflation and taxation increasing with time, this is becoming increasingly important.",
    image: retirement,
  },
  {
    num: "02",
    title: "Risk Management",
    description:
      "PFL has partnered with various life assurance companies to offer life assurance, income protection and retirement products. Clients are exposed to various personal and business risks that can have disastrous effects on their financial well-being.",
    image: risk,
  },
  {
    num: "03",
    title: "Tax Planning",
    description:
      "PFL offers full tax planning incorporated into your financial planning process, covering the areas of: Income tax, Donations tax, Capital gains tax, Value-added tax, Transfer duty, Estate duty",
    image: tax,
  },
  {
    num: "04",
    title: "Investment Planning",
    description:
      "We partner with top asset managers in South Africa and globally, chosen through in-depth qualitative and quantitative research. By aligning with managers who have a proven, sustainable track record, we develop strategic asset and portfolio allocations that aim to meet investor objectives with minimal volatility.",
    image: investment,
  },
  {
    num: "05",
    title: "Estate Planning",
    description:
      "PFL understands the importance of estate planning and will guide you in protecting your assets. We aim to ensure you and your family benefit fully during your lifetime and beyond, with sufficient capital to meet estate obligations and fulfill your wishes.",
    image: estate,
  },
  {
    num: "06",
    title: "Business Planning",
    description:
      "PFL offers business planning support to ensure your dependants are financially secure in the event of a partner’s death, disability, or critical illness. We also help ensure your estate can meet any contingency liabilities arising from such events.",
    image: business,
  },
  {
    num: "07",
    title: "Health",
    description:
      "In keeping with PFL’s goal of Holistic Financial Planning, we further offer PFL Healthcare. Our aim is to ensure all clients are correctly and comprehensively covered, so that at claims stage their minds are at ease.",
    image: health,
  },
  {
    num: "08",
    title: "Insurance Services",
    description:
      "As a partner in insuring your personal and business assets, we offer a comprehensive and efficient service, with the knowledge of the type of cover required once a thorough needs analysis has being completed. We deal with all the Major reputable Insurers to seek the best comparative quote without compromising the benefits that are offered.",
    image: insurance,
  },
];

const OurServices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openStates, setOpenStates] = useState(
    new Array(serviceData.length).fill(true)
  );

  const imgRefs = useRef([]);

  const mobileView = 768;
  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < mobileView);
    };

    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  const handleMouseMove = (e, index) => {
    const img = imgRefs.current[index];
    if (!img) return;

    const parent = e.currentTarget;
    const rect = parent.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const moveX = (offsetX - rect.width / 2) / 10;
    const moveY = (offsetY - rect.height / 2) / 10;

    gsap.to(img, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    const img = imgRefs.current[index];
    if (!img) return;

    gsap.to(img, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".service-top",
          start: "top 85%",
          end: "top 50%",
        },
      });

      titleTimeline
        .from(".service-top h2, .service-top h3", {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          ease: "power2.out",
        })
        .from(
          ".service-top .line",
          {
            width: 0,
            x: "7rem",
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.4"
        );

      gsap.utils.toArray(".service-list").forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 40%",
          },
          scale: 0.9,
          y: 40,
          opacity: 0,
          ease: "back.out(1.5)",
          delay: i * 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="w-full  bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#2D2D2C]">
        <div className="service-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#fdfdfd]">
              Our Services
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-300">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {serviceData.map((items, index) => {
            const isFirst = index === serviceData.length - 8;
            const isMid = index !== serviceData.length - 1;
            const isLast = index === serviceData.length - 1;
            return (
              <div
                key={index}
                className={`service-list flex lg:flex-row flex-col ${
                  isFirst ? "border-t-2" : ""
                } ${isMid && "border-b-2"} ${
                  isLast && "border-b-2"
                } border-[#FDFDFD]  hover:bg-[#BA8748] -z-0 select-none`}
              >
                <div
                  className={`xl:w-[30%] w-full py-[2rem] flex justify-center gap-12 items-center`}
                >
                  <h2
                    id="num"
                    className="text-4xl md:text-6xl poppins-semibold text-transparent "
                  >
                    {items.num}
                  </h2>
                  <h2 className="xl:w-[10rem] w-full text-xl poppins-medium text-[#FDFDFD]">
                    {items.title}
                  </h2>
                </div>
                <div
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={isMobile ? "hidden" : "w-[25%] relative group"}
                >
                  <img
                    ref={(el) => (imgRefs.current[index] = el)}
                    className="absolute w-64 h-48 -top-5 rounded-2xl object-cover z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={items.image}
                    alt=""
                  />
                </div>
                <div className="xl:w-[45%] w-full flex items-center lg:px-5 lg:py-3 relative">
                  <button
                    className="absolute -top-5 lg:top-1 right-3 text-zinc-300"
                    onClick={() => {
                      const updatedStates = [...openStates];
                      updatedStates[index] = !updatedStates[index];
                      setOpenStates(updatedStates);
                    }}
                  >
                    {openStates[index] ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                  {openStates[index] && (
                    <p className="lg:text-medium text-sm text-justify poppins-regular text-zinc-300 leading-7">
                      {items.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
