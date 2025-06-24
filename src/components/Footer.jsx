import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="text-white h-auto bg-[#343634] max-w-[150rem] mx-auto relative overflow-hidden border-t-[1px] border-[#d4d4d8]">
      <div className="top flex flex-col gap-10  items-start py-12 px-5 md:flex-wrap lg:flex-row lg:justify-evenly">
        <div className="footer-elem flex flex-col justify-start lg:h-[14rem] h-auto">
          <div>
            <img src="/PFL Logo2.png" alt="GGS Logo" className="h-16 mb-3" />
          </div>
          <div>
            <h3 className="font-space-mono text-medium">
              Proud to be part of your journey
            </h3>
          </div>

          <ul className="flex gap-5 mt-4 text-2xl">
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <RiInstagramFill />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tihan-bezuidenhout/">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-elem w-48 lg:h-[14rem] h-auto flex flex-col items-start  ">
          <div>
            <h2 className="uppercase poppins-bold text-base tracking-widest mb-3">
              Company
            </h2>
          </div>
          <div>
            <ul className="space-y-3">
              <li className="poppins-regular text-sm tracking-wider hover:text-[#BA8748]">
                {" "}
                {/* <Link to="/aboutUs">About Us</Link> */}About Us
              </li>
              <li className="poppins-regular text-sm tracking-wider hover:text-[#BA8748]">
                <a href="mailto:info@pfl.co.za">Support</a>
              </li>
              <li className="poppins-regular text-sm tracking-wider hover:text-[#BA8748]">
                <a target="_blank" href="https://www.planforlife.co.za/PFL-POPI-Policy.pdf">
                  POPIA
                </a>
              </li>
              <li className="poppins-regular text-sm tracking-wider hover:text-[#BA8748]">
                <a target="_blank" href="https://www.planforlife.co.za/PFL_Privacy-Notice.pdf">
                  Privacy Policy
                </a>
              </li>
              <li className="poppins-regular text-sm border-2 px-2 py-1 rounded-2xl tracking-wider hover:text-amber-50 hover:bg-[#BA8748]">
                <a target="_blank" href="http://pfl-newsletter.s3-website-eu-west-1.amazonaws.com/">
                  View Our Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-elem w-52 lg:h-[14rem] h-auto flex flex-col  items-start justify-start">
          <div>
            <h2 className="uppercase poppins-bold tracking-widest mb-3">
              Get In Touch
            </h2>
          </div>
          <div>
            <div className="space-y-3">
              <ul className="flex gap-2 items-center">
                <li><IoIosCall /></li>
                <li className="poppins-regular text-sm tracking-widest hover:text-[#BA8748]">
                  {" "}
                  <a href="tel:087-9400-735">087-9400-735</a>
                </li>
              </ul>
              <ul className="flex gap-2 items-center">
                <li><IoLogoWhatsapp /></li>
                <li className="poppins-regular text-sm tracking-widest hover:text-[#BA8748]">
                  {" "}
                  <a href="tel:073-011-6226">073-011-6226</a>
                </li>
              </ul>
              <ul className="flex gap-2 items-center">
                <li ><MdEmail /></li>
                <li className="poppins-regular  text-sm tracking-widest hover:text-[#BA8748]">
                  <a href="mailto:info@pfl.co.za">
                    info@pfl.co.za
                  </a>
                </li>
              </ul>
              <li className="poppins-regular text-sm tracking-wider ">
                {" "}
                Pran Boulevard, 6 Nokwe Avenue, <br />
                Umhlanga Ridge, Durban, 4019
              </li>
            </div>
          </div>
        </div>
        <div className="footer-elem w-80 lg:h-[14rem] h-auto mb-5 lg:mb-0 flex flex-col  items-start justify-start">
          <div>
            <h2 className="uppercase poppins-bold tracking-widest mb-3">
              Address
            </h2>
          </div>
          <div className="h-full w-full rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13858.733577846511!2d31.070428!3d-29.728929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef705f16dfc5419%3A0xdfdef5d9cf610dc4!2sPran%20Boulevard!5e0!3m2!1sen!2ssa!4v1680349955595!5m2!1sen!2ssa"
              className="h-full w-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pran Boulevard Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bottom bg-[#2D2D2C] w-full py-1  bg-section-linear absolute bottom-0 z-20 flex justify-center items-center">
        <div className="font-space-mono flex gap-1 justify-center items-center">
          <div>
            <h2 className="text-center">
              &copy; Plan for Life is a Registered Financial Services Provider,
              FSP No: 170912
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
