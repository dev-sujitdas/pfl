import { useEffect, useRef } from "react";
import video from "/Video/tree.mp4";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import gsap from "gsap";


const Home = () => {
  const paraRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#title span", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power4.out",
      delay: 0.5,
    })
      .from(
        paraRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full bg-[#FDFDFD] relative overflow-hidden"
    >
      <div className="p-[7rem] max-w-[150rem] mx-auto relative h-full flex justify-center items-center">
        <div
          id="left"
          className="w-1/2 h-full flex flex-col justify-center relative z-50 lg:pl-5"
        >
          <div id="title">
            <h1 className="text-[5rem] leading-20 pr-5 poppins-semibold h-[6rem] overflow-hidden">
              <span className="inline-block">Your Partner in</span>
            </h1>
            <h1 className="text-[5rem] leading-20 pr-5 poppins-semibold h-[6rem] overflow-hidden">
              <span className="inline-block">Lifelong Financial</span>
            </h1>
            <h1 className="text-[5rem] leading-20 pr-5 poppins-semibold h-[6rem] overflow-hidden">
              <span className="inline-block">Growth</span>
            </h1>
          </div>

          <div className="w-1/2 mt-5 z-50">
            <p ref={paraRef} className="text-[1.2rem] text-zinc-600">
              Offering personalized financial strategies to help you grow,
              protect, and enjoy your wealth — with clarity, integrity, and
              expert guidance every step of the way.
            </p>
          </div>
          <a href="">
            <button
              ref={buttonRef}
              className="px-5 py-2 mt-5 rounded-full poppins-regular bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium cursor-pointer"
            >
              Get in touch
            </button>
          </a>

          <div className="absolute w-52 h-52 blur-[150px]  bg-[#a2ca87] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-20 rounded-full"></div>
        </div>

        <div id="right" className="h-full w-1/2 flex flex-col items-center">
          <video
            className="h-full w-full object-contain"
            src={video}
            autoPlay
            muted
          ></video>
        </div>
      </div>

      <div className="w-full h-16 absolute bottom-3 z-30 flex justify-center items-center">
        <a id="acnchor" href="#about">
          <h2 className="font-bold text-5xl text-[#2C2B2B] ">
            <RiArrowDownDoubleFill />
          </h2>
        </a>
      </div>
    </section>
  );
};

export default Home;
