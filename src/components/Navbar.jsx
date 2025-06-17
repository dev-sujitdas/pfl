import React from "react";
import logo from "/PFL Logo2.png";

const Navbar = ({ lenis }) => {
  const navItems = [    
    { name: "About Us", link: "#about" },
    { name: "Our Services", link: "#services" },
    { name: "Financial Timeline", link: "#timeline" },
    { name: "Client Proposition", link: "#proposition" },
    { name: "Our Advisors", link: "#advisors" },
    { name: "Contact Us", link: "#contact" },
  ];

  const handleScroll = (link) => {
    if (lenis?.current) {
      lenis.current.scrollTo(link);
    }
  };

  return (
    <div className="w-full fixed top-0 z-999 backdrop-blur-2xl bg-[#b7d4a334] ">
      <div className="max-w-[150rem] w-[90%]  mx-auto px-7 py-4 flex justify-between items-center border-b border-black/10">
        <div className="h-12" >
          <a href="/">
          <img className="w-full h-full" src={logo} alt="" />
          </a>
        </div>
        <div className="flex justify-between items-center z-999">
          <div className="flex items-center gap-10 mr-10">
            {navItems.map((items, index) => (
              <button
                href={items.link}
                key={index}
                onClick={() => handleScroll(items.link)}
              >
                <h3 className="poppins-regular cursor-pointer">{items.name}</h3>
              </button>
            ))}
          </div>
          <a
            href="https://megafin.wealthportal.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 rounded-full poppins-regular bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium cursor-pointer">
              Portal Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
