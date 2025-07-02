import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import logo from "/PFL Logo2.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

const navItems = [
  { name: "About Us", link: "#about" },
  { name: "Our Services", link: "#services" },
  { name: "Financial Timeline", link: "#timeline" },
  { name: "Client Proposition", link: "#proposition" },
  { name: "Our Advisors", link: "#advisors" },
  { name: "Contact Us", link: "#contact" },
];

const Navbar = ({ lenis }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobNavRef = useRef();
  const navRef = useRef();
  const handleScroll = (link) => {
    if (lenis?.current) {
      lenis.current.scrollTo(link);
    }
  };

  useLayoutEffect(() => {
    if (isMobileOpen && mobNavRef.current) {
      gsap.fromTo(
        mobNavRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isMobileOpen]);

  useLayoutEffect(() => {
    if (isMobileOpen === false && mobNavRef.current) {
      gsap.fromTo(
        mobNavRef.current,
        { x: "0%", opacity: 1 },
        { x: "-100%", opacity: 0, duration: 0.5, ease: "power3.out" }
      );    
    }
  }, [isMobileOpen]);

   useEffect(() => {
      if (navRef.current) {
        gsap.from(navRef.current.querySelectorAll("button, .desk-menu, img"), {
          y: -30,
          duration: 0.6,
          delay: 0.5,
          opacity: 0,
          stagger: 0.1,
        });
      }
    }, []);

  return (
    <nav className="w-full fixed top-0 z-[999] backdrop-blur-2xl bg-[#b7d4a334]" aria-label="Main navigation">
      <div ref={navRef} className="max-w-[150rem] w-[90%] mx-auto px-2 lg:px-7 py-4 sm:py-3 flex justify-between items-center border-b border-black/10">        
        <div className="h-12 w-20">
          <a href="/">
            <img className="w-full h-full" src={logo} alt="Company Logo" />
          </a>
        </div>

        <div className="flex items-center z-[999]">          
          <div id="desk-menu" className="hidden xl:flex items-center 2xl:gap-10 gap-5 mr-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.link)}
                className="poppins-regular cursor-pointer text-[0.85rem] 2xl:text-[1rem]"
              >
                {item.name}
              </button>
            ))}
          </div>
        
          <a
            href="https://megafin.wealthportal.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex"
          >
            <button className="px-5 py-2 rounded-full poppins-regular text-[0.85rem] 2xl:text-[1rem] bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium">
              Portal Login
            </button>
          </a>
          
          <div id="mob-menu" className="xl:hidden ml-5 flex justify-center items-center">
            <button
              className="text-3xl text-[#2C2B2B] poppins-bold"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Menu"
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div
          ref={mobNavRef}
          className="h-screen fixed top-0 right-0 w-[65%] bg-[#2c2b2b] z-[999]"
        >
          <div className="absolute top-4 right-4">
            <button
              className="text-5xl poppins-bold text-amber-50"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="h-full flex flex-col justify-center items-start gap-10 px-[2rem]">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleScroll(item.link);
                  setIsMobileOpen(false);
                }}
                className="poppins-semibold text-xl cursor-pointer text-amber-50"
              >
                {item.name}
              </button>
            ))}

            
            <a
              href="https://megafin.wealthportal.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <button className="px-5 py-2 rounded-full poppins-regular text-[0.85rem] bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium">
                Portal Login
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
