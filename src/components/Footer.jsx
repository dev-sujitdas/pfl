import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="text-white h-auto bg-[#383836] max-w-[150rem] mx-auto relative overflow-hidden border-t-[1px] border-[#d4d4d8]">
          <div className="top flex flex-col gap-10  items-start py-12 px-5 md:flex-wrap lg:flex-row lg:justify-evenly">
            <div className="footer-elem flex flex-col justify-start h-[14rem]">
              <div>
                <img src="/favicon.png" alt="GGS Logo" className="h-16 mb-3" />
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
                  <a href="https://www.linkedin.com/in/">
                    <FaLinkedin />
                  </a>
                </li>              
             
              </ul>
            </div>
    
            <div className="footer-elem w-48 h-[14rem] flex flex-col items-start  ">
              <div>
                <h2 className="uppercase font-orbitron-bold text-base font-bold tracking-widest mb-3">
                  Company
                </h2>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    {" "}
                    {/* <Link to="/aboutUs">About Us</Link> */}About Us
                  </li>
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    <a href="mailto:hello@gravityglobalsolution.in">Support</a>
                  </li>
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                      Term and Condition
                    </a>
                  </li>
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    <a target="_blank" href="https://documents.gravityglobalsolution.in/">
                      Pricing and Refund
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-elem w-48 h-[14rem] flex flex-col  items-start justify-start">
              <div>
                <h2 className="uppercase font-orbitron-bold tracking-widest mb-3">
                  Comunity
                </h2>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9997F4]">
                    {" "}
                    <a href="">Discord</a>
                  </li>
                  <li className="font-orbitron text-sm tracking-wider hover:text-[#9897F4]">
                    {" "}
                    <a href="https://www.instagram.com/gravitycomunity/">Gravity</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-elem w-52 h-[14rem] flex flex-col  items-start justify-start">
              <div>
                <h2 className="uppercase font-orbitron-bold tracking-widest mb-3">
                  Get In Touch
                </h2>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="font-orbitron text-sm tracking-widest hover:text-[#9897F4]">
                    {" "}
                    <a href="tel:087-9400-735">087-9400-735</a>
                  </li>
                  <li className="font-orbitron text-sm tracking-widest hover:text-[#9897F4]">
                    {" "}
                    <a href="tel:073-011-6226">073-011-6226</a>
                  </li>
                  <ul className='flex gap-2 items-center'>
                    <li><MdEmail /></li>
                  <li className="font-orbitron  text-sm tracking-widest hover:text-[#9897F4]">                   
                    <a href="mailto:hello@gravityglobalsolution.in">
                    info@pfl.co.za
                    </a>
                  </li>
                  </ul>
                  <li className="font-orbitron text-sm tracking-wider ">
                    {" "}
                    Pran Boulevard,
                    6 Nokwe Avenue, <br />
                    Umhlanga Ridge, Durban, 4019
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom bg-[#2D2D2C] w-full py-1  bg-section-linear absolute bottom-0 z-20 flex justify-center items-center">
            <div className="font-space-mono flex gap-1">           
              <div>
                <h2>&copy; Plan for Life is a Registered Financial Services Provider, FSP No: 170912</h2>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer