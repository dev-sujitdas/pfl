import React, { useState, useEffect } from "react";
import customer from "/Images/customer-support.png";
import emailjs from '@emailjs/browser';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const services = [
    "Our contact",
    "Our Services",
    "Schedule an contactointment",
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectServices, setSelectServices] = useState("");

  const handleClick = (item, e) => {
    e.preventDefault();
    setSelectServices(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_l5w88d8', 
    'template_9e9zxnz', 
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: selectServices 
    },
    '-kCBwfPFdb64GezCK' 
  )
  .then(() => {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setSelectServices("");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
    alert("Failed to send message.");
  });
};


  useGSAP(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.refresh(); 

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-top",
        start: "top 70%",
        end: "top 30%",                
      },
    });

    titleTimeline.from(".contact-top h2, .contact-top h3", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    titleTimeline.fromTo(
      ".contact-top .line",
      { width: "0", x: "7rem", opacity: 0 },
      {
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      },
      "<" 
    );

    gsap.from(".contact-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".contact-subtitle",
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from([".contact-form", ".contact-img"], {
      scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return () => ctx.revert(); 
}, []);



  return (
    <section id="contact" className="w-full  bg-[#fdfdfd]">
      <div className="w-full max-w-[150rem] mx-auto xl:p-[7rem] md:p-[3rem] p-[2rem] rounded-t-[2rem] xl:rounded-t-[5rem] bg-[#2D2D2C]">
        <div className="contact-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl poppins-semibold text-[#fdfdfd]">
              Contact Us
            </h2>
          </div>
          <div className="flex w-[10rem] md:w-[20rem] md:gap-6 items-center justify-end md:justify-between">
            <div className="hidden lg:w-28 md:block">
              <div className="line w-5 lg:w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[4rem] md:h-[5.3rem] w-[7rem] md:w-[10rem] overflow-hidden">
              <h3 className="text-sm md:text-lg 2xl:text-xl poppins-medium w-[7rem] md:w-[10rem] text-zinc-300">
                Plan Your Financial Future with PFL
              </h3>
            </div>
          </div>
        </div>
        <div className="contact-subtitle">
          <h3 className="subtitle mt-6 text-lg lg:text-2xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Get in Touch for Trusted Financial Guidance.
          </h3>
        </div>

        <div className="contact-wrapper w-full flex lg:flex-row flex-col justify-center items-center">
          <div className="contact-img left h-[20rem] lg:h-[30rem] lg:w-1/2 w-full flex justify-center items-center ">
            <img className="h-full" src={customer} alt="" />
          </div>

          <div className="right lg:w-1/2 w-full">
            <form             
              onSubmit={handleSubmit}
              className="contact-form max-w-[600px] mx-auto p-4"
            >
              <h4 className="text-zinc-300 text-lg md:text-xl poppins-regular-italic">
                Find out more about:
              </h4>
              <div className="flex flex-wrap gap-2 my-4">
                {services.map((item, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleClick(item, e)}
                    className={`px-5 py-2 rounded-full poppins-regular ${
                      selectServices === item
                        ? "bg-[#BA8748]"
                        : "bg-[#2c2b2b]"
                    }  border-2 border-amber-50 hover:bg-[#BA8748] text-sm md:text-medium text-amber-50 font-medium cursor-pointer`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div
                id="name-email-container"
                className="flex flex-col gap-4 my-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border  bg-[#e9e9e9] border-gray-400 rounded-2xl"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-4 py-2 border bg-[#e9e9e9] border-gray-400 rounded-2xl"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-[#e9e9e9] border-gray-400 rounded-2xl my-2"
                />
              </div>
              <button                
                type="submit"
                className="w-full px-5 py-2 rounded-2xl poppins-regular bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 text-sm md:text-medium poppins-medium cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
