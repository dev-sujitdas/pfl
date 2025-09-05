import retirement from "/Images/retirement.jpg";
import risk from "/Images/risk.jpg";
import tax from "/Images/tax.jpg";
import investment from "/Images/investment.jpg";
import estate from "/Images/estate.jpg";
import business from "/Images/business.jpg";
import health from "/Images/health.jpg";
import insurance from "/Images/insurance.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaChartLine, FaShieldAlt, FaBriefcase, FaCrown, FaUsers, FaHeartbeat } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Retirement Planning",
    icon: <BsBank className="text-3xl lg:text-5xl text-green-600" />,
    intro: "Retire With Confidence—Not Guesswork",
    image: retirement,
    questions: [
      "How much do I need to retire comfortably?",
      "When can I afford to stop working?",
      "How do I make my savings last?"
    ],
    whatWeDo: [
      "Create a personalized retirement roadmap based on your lifestyle goals.",
      "Optimize pension plans for tax efficiency and growth.",
      "Design sustainable income streams for your retirement years.",
      "Conduct stress tests to ensure your plan withstands market changes.",
      "Provide ongoing reviews to adjust for life changes."
    ],
    different: "Our independent advisors prioritize your goals over product sales, delivering a strategy tailored to your unique needs. We combine human expertise with advanced tools to ensure your retirement plan is robust and adaptable."
  },
  {
    id: 2,
    title: "Investment Strategy",
    icon: <FaChartLine className="text-3xl lg:text-5xl text-green-600" />,
    intro: "Invest Smarter, Not Harder",
    image: investment,
    questions: [
      "What’s the best way to grow my wealth?",
      "How do I balance risk and return?",
      "Are my investments performing as they should?"
    ],
    whatWeDo: [
      "Design diversified portfolios tailored to your risk tolerance.",
      "Allocate assets across equities, bonds, and alternative investments.",
      "Monitor and rebalance portfolios to maximize returns.",
      "Provide transparent performance reports and real-time updates.",
      "Integrate tax-efficient strategies to keep more of your gains."
    ],
    different: "Our tech-enhanced tools track your investments in real time, but our advisors make the decisions. Independent and unbiased, we build strategies that reflect your goals, not ours."
  },
  {
    id: 3,
    title: "Risk & Insurance Planning",
    icon: <FaShieldAlt className="text-3xl lg:text-5xl text-red-600" />,
    intro: "Protect What Matters Most",
    image: risk,
    questions: [
      "What insurance do I really need?",
      "How do I protect my family’s financial future?",
      "What happens if I can’t work?"
    ],
    whatWeDo: [
      "Analyze your risks to recommend the right insurance products.",
      "Secure life, disability, and income protection coverage.",
      "Develop risk mitigation strategies for unexpected events.",
      "Review policies annually to ensure coverage remains relevant.",
      "Offer independent product selection for cost-effective solutions."
    ],
    different: "We don’t sell insurance— we design protection plans. Our independent status means we choose products that fit your needs, not a company’s agenda.backed by civil law expertise for handling contractual disputes and court appearances in Magistrate Courts to resolve any insurance-related issues."
  },
  {
    id: 4,
    title: "Estate & Legacy Planning",
    icon: <MdRealEstateAgent className="text-3xl lg:text-5xl text-sky-600" />,
    intro: "Build a Legacy That Lasts",
    image: estate,
    questions: [
      "How do I ensure my assets are distributed as I want?",
      "What’s the best way to minimize estate taxes?",
      "How do I set up a trust for my family?"
    ],
    whatWeDo: [
      "Draft wills and establish trusts to secure your legacy",
      "Plan for tax-efficient estate transfers.",
      "Create gifting strategies to support loved ones or charities.",
      "Coordinate with legal experts for seamless execution, including drafting of antenuptial and post-nuptial contracts, co-habitation agreements, and notarial deeds such as servitudes, deeds of cession of usufruct, notarial leases, trust deeds of donations, and notarial bonds.",
      "Review estate plans regularly to reflect life changes, incorporating property law services like deceased estate transfers and endorsements."
    ],
    different: "Our in-house legal expertise ensures your estate plan is airtight, with services including authentication of documents and apostille for international use, as well as advice on marital regimes and their consequences. We craft personalized strategies that honor your wishes and protect your wealth for generations."
  },
  {
    id: 5,
    title: "Business & Succession Planning",
    icon: <FaBriefcase className="text-3xl lg:text-5xl text-emerald-600" />,
    intro: "Plan for Your Business’s Future Today",
    image: business,
    questions: [
      "How do I prepare my business for sale?",
      "What happens to my business if I retire?",
      "How do I protect my business from key person risks?"
    ],
    whatWeDo: [
      "Conduct business valuations to understand your company’s worth.",
      "Develop succession strategies for smooth transitions.",
      "Secure key person insurance to protect your business.",
      "Create exit plans that maximize value and minimize taxes.",
      "Align business goals with personal financial plans, including drafting and negotiating shareholder agreements, franchise agreements, partnership and joint venture agreements, and commercial property agreements."
    ],
    different: "We combine financial and legal expertise to create seamless succession plans, with commercial law support for drafting and negotiating agreements. Our tailored approach ensures your business thrives, whether you stay or move on, incorporating property law for lease contracts, co-ownership agreements, and registration of servitudes."
  },
  {
    id: 6,
    title: "High Net Worth Planning",
    icon: <FaCrown className="text-3xl lg:text-5xl text-yellow-600" />,
    intro: "Wealth Management That Matches Your Vision",
    image: tax,
    questions: [
      "How do I preserve my wealth for the long term?",
      "What are the best tax-efficient strategies?",
      "How do I coordinate complex financial assets?"
    ],
    whatWeDo: [
      "Design bespoke wealth preservation strategies.",
      "Manage complex portfolios across diverse asset classes.",
      "Optimize tax strategies to minimize liabilities.",
      "Coordinate with private banks and legal teams.",
      "Provide concierge-level service for your unique needs, including non-resident property transfers and endorsements, as well as deeds registry searches."
    ],
    different: "As independent advisors, we focus on your vision, not product quotas. Our tech-enhanced tools and personalized strategies ensure your wealth works for you, with integrated legal services for property utilisation contracts, registration of sectional title transfers, and notarial services for international document authentication."
  },
  {
    id: 7,
    title: "Employee Benefits",
    icon: <FaUsers className="text-3xl lg:text-5xl text-green-600" />,
    intro: "Empower Your Team With Smart Benefits",
    image: insurance,
    questions: [
      "How do I attract and retain top talent?",
      "What benefits are cost-effective for my business?",
      "How do I ensure compliance with regulations?"
    ],
    whatWeDo: [
      "Design group insurance plans for health, life, and disability.",
      "Create retirement benefit programs to secure employee futures.",
      "Implement wellness programs to boost employee satisfaction.",
      "Ensure compliance with South African labor regulations.",
      "Provide ongoing support for benefits administration.",
      "Highlight: Our growing Employee Benefits service currently supports over 3,000 employees, delivering tailored solutions to businesses of all sizes."
    ],
    different: "With experience serving over 3,000 employees, we craft benefits packages that attract talent and fit your budget. Our independent approach ensures unbiased product selection for maximum value."
  },
  {
    id: 8,
    title: "Health Planning",
    icon: <FaHeartbeat className="text-3xl lg:text-5xl text-red-600" />,
    intro: "Secure Your Health, Secure Your Future",
    image: health,
    questions: [
      "•	How do I plan for medical expenses in retirement?",
      "•	What health coverage options are best for my family?",
      "•	How do I prepare for unexpected healthcare costs?"
    ],
    whatWeDo: [
      "•	Assess your current and future healthcare needs.",
      "•	Recommend medical aid and gap cover plans tailored to your lifestyle.",
      "•	Plan for long-term care costs, including retirement and critical illness.",
      "•	Integrate health planning with your broader financial strategy.",
      "•	Review health coverage annually to adapt to changing needs.",
    ],
    different: "Our independent advisors design health plans that complement your financial goals, ensuring comprehensive coverage without unnecessary costs. We partner with trusted providers to secure the best options for you and your family."
  },

];

const OurServices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

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
            start: "top 90%",
            end: "top 50%",
          },
          scale: 0.9,
          y: 40,
          opacity: 0,
          ease: "back.out(1.5)",          
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="w-full relative z-20 bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-emerald-900 ">
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
            <div className="h-[4rem] md:h-[6.6rem] w-[8rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[8rem] md:w-[10rem] text-zinc-300">
                Reliable Services for a Secure Tomorrow
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
              className="service-list"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;



