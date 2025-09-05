import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import gsap from "gsap";

const ServiceCard = ({ service, isOpen, toggle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle (click for mobile)
  const handleToggle = () => {
    const el = contentRef.current;
    const img = imageRef.current;

    if (isOpen) {
      gsap.to(el, { height: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.to(img, {
        opacity: 0,
        x: 50,
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      const contentHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0 },
        { height: contentHeight, duration: 0.5, ease: "power2.inOut" }
      );

      const imgHeight = img.scrollHeight;
      gsap.fromTo(
        img,
        { opacity: 0, x: 50, height: 0 },
        {
          opacity: 1,
          x: 0,
          height: imgHeight,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }

    toggle(); // notify parent
  };

  // Hover enter (desktop)
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const el = contentRef.current;
      const img = imageRef.current;
      setIsHover(true);

      const contentHeight = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0 },
        { height: contentHeight, duration: 0.5, ease: "power2.inOut" }
      );

      const imgHeight = img.scrollHeight;
      gsap.fromTo(
        img,
        { opacity: 0, x: 50, height: 0 },
        {
          opacity: 1,
          x: 0,
          height: imgHeight,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }, 300);
  };

  
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const el = contentRef.current;
      const img = imageRef.current;
      setIsHover(false);

      gsap.to(el, { height: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.to(img, {
        opacity: 0,
        x: 50,
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, 0);
  };

  return (
    <div
      onClick={isMobile ? handleToggle : undefined}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      className="service-list border rounded-2xl bg-[#EEF4EA] p-3 mb-5 overflow-hidden"
    >
      <div
        className={`flex items-center justify-between cursor-pointer rounded-xl ${
          isHover || isOpen ? "bg-emerald-950" : ""
        } p-3`}
      >
        <div className="flex items-center gap-4">
          {service.icon}
          <div>
            <h3
              className={`text-sm md:text-xl lg:text-3xl poppins-semibold ${
                isHover || isOpen ? "text-zinc-200" : "text-[#2C2B2B]"
              }`}
            >
              {service.title}
            </h3>
            <p className="text-zinc-400 text-xs md:text-base lg:text-lg">
              {service.intro}
            </p>
          </div>
        </div>
        <span
          className={`${
            isHover || isOpen
              ? "bg-zinc-200 text-emerald-950"
              : "text-zinc-100 bg-emerald-950"
          } p-1 md:p-2 rounded-full text-sm md:text-xl`}
        >
          {isHover || isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      <div className="flex justify-between">
        <div className="w-full lg:w-[70%]">
          <div
            ref={contentRef}
            className="overflow-hidden h-0 text-gray-700 space-y-4 px-3"
          >
            <div>
              <h4 className="poppins-semibold mt-4">What Clients Ask:</h4>
              <ul className="list-disc list-inside text-sm md:text-base">
                {service.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="poppins-semibold">What We Do:</h4>
              <ul className="list-disc list-inside text-sm md:text-base">
                {service.whatWeDo.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="poppins-semibold">What Makes Us Different:</h4>
              <p className="text-sm md:text-base">{service.different}</p>
            </div>
          </div>
        </div>

        {/* Image wrapper */}
        <div
          ref={imageRef}
          className="overflow-hidden h-0 opacity-0 my-auto px-3 lg:block hidden"
        >
          <img
            src={service.image}
            alt=""
            className="h-60 w-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
