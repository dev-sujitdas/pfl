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
import { useRef, useState } from "react";

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

  const [openStates, setOpenStates] = useState(
    new Array(serviceData.length).fill(true)
  );

  const imgRefs = useRef([]);

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

  return (
    <section id="services" className="w-full  bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto p-[7rem] bg-[#2D2D2C] rounded-t-[5rem]">

         <div className="service-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#fdfdfd]">
              Our Services
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-300">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>


        <div className="mt-10">
          {serviceData.map(({ num, title, description, image }, index) => (
            <div
              key={index}
              className="service-list flex border-t-2 border-[#FDFDFD] nth-last-[1]:border-b-2 hover:bg-[#BA8748] -z-10 select-none"
            >
              <div className="w-[30%] py-[2rem] flex justify-center gap-12 items-center ">
                <h2
                  id="num"
                  className="text-6xl poppins-semibold text-transparent "
                >
                  {num}
                </h2>
                <h2 className="w-[10rem] text-3xl poppins-medium text-[#FDFDFD]">
                  {title}
                </h2>
              </div>
              <div
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="w-[25%] relative group"
              >
                <img
                  ref={(el) => (imgRefs.current[index] = el)}
                  className="absolute w-64 h-48 -top-5 rounded-2xl object-cover z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src={image}
                  alt=""
                />
              </div>
              <div className="w-[45%] flex items-center px-5 py-3 relative">
                <button
                  className="absolute top-2 right-3 text-zinc-300"
                  onClick={() => {
                    const updatedStates = [...openStates];
                    updatedStates[index] = !updatedStates[index];
                    setOpenStates(updatedStates);
                  }}
                >
                  {openStates[index] ? <FaChevronDown /> : <FaChevronUp /> }
                </button>
                {openStates[index] && (
                  <p className="text-medium poppins-regular text-zinc-300 leading-7">
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
