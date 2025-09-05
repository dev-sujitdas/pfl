import {useState, useEffect, useRef } from "react";
import video from "/Video/tree.mp4";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const paraRef = useRef();
  const buttonRef = useRef();
  const homeRef = useRef();
  const scrollRef = useRef();
  const videoRef = useRef();
  const timerRef = useRef(null);
  const [toggle, setToggle] = useState(false);




  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("#title span", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power4.out",
      delay: 1,
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


  useEffect(() => {
    gsap.to(scrollRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        scroller: document.body,
      },
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleClick = ()=> {
    setToggle((prev)=> !prev);

    if(timerRef.current){
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(()=>{
      setToggle(false);
    }, 3000)             
  };

  useEffect(()=>{
    return ()=> clearTimeout(timerRef.current);
  },[])


  return (
    <section
      id="home"
      ref={homeRef}
      className={`h-screen w-full bg-[#FDFDFD] overflow-hidden sticky top-0`}
    >
      <div
        ref={scrollRef}
        className="h-full w-full flex justify-center items-center"
      >
        <div
          id="home-container"
          className="lg:p-[7rem] max-w-[150rem] h-full mx-auto flex justify-center items-center mt-[18.75rem]"
        >
          {/* Left section */}
          <div
            id="left"
            className="w-full lg:w-1/2 h-full flex flex-col justify-center relative z-50 2xl:pl-5"
          >
            <div id="title">
              <h1 className="md:leading-tight poppins-semibold h-fit 2xl:h-[6rem] overflow-hidden 2xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem]  flex items-center">
                <span className="inline-block">Your Partner in</span>
              </h1>
              <h1 className="leading-8 md:leading-tight poppins-semibold h-fit 2xl:h-[6rem] overflow-hidden 2xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] flex gap-5 flex-wrap items-center">
                <span className="inline-block">Lifelong Financial</span>
              </h1>
              <h1 className="md:leading-tight poppins-semibold h-fit 2xl:h-[6rem] overflow-hidden 2xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] flex items-center">
                <span className="inline-block">Growth</span>
              </h1>
            </div>

            <div ref={paraRef} className="para w-full 2xl:w-[80%] mt-2 2xl:mt-5 z-50">
              <h4  className="text-zinc-600 poppins-semibold text-[1rem] md:text-[1.2rem]">More Than Just Algorithms</h4>
              <p                
                className={`para-1 text-sm md:text-[1.2rem] text-zinc-600`}
              >
                Digital tools can track your money—but they can’t understand your goals, your fears, or your vision.
                At PFL, we combine human insight with smart technology to give you real advice, in real time, tailored to your life.
              </p>
              <span onClick={handleClick} className="text-xs text-blue-800 md:hidden">{toggle ? "Close" : "Learn more"}</span>
              <p                
                className={`para-2 ${toggle ? "block absolute bottom-0 bg-gray-300 p-2 rounded-xl" : "hidden"} md:block text-sm md:text-[1.2rem] text-zinc-600 mt-2 `}
              >
                While AI and robo-advisors can automate tasks, they can’t truly understand your unique story. 
                We believe that meaningful financial planning requires both insight and empathy—qualities that only come from a personal relationship with a trusted advisor.
              </p>
            </div>

            <a href="#contact">
              <button
                ref={buttonRef}
                className="px-5 py-2 mt-2 2xl:mt-5 rounded-full poppins-regular bg-[#2c2b2b] border-2 border-amber-50 hover:bg-[#BA8748] text-amber-50 font-medium text-[0.8rem] md:text-[1rem] cursor-pointer"
              >
                Get in touch
              </button>
            </a>

            {/* Green blur background */}
            <div className="absolute w-52 h-52 blur-[150px]  bg-[#a2ca87] top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-20 rounded-full"></div>
          </div>

          {/* Right section */}
          <div
            id="right"
            className="h-full w-1/2 flex flex-col items-center justify-center md:pt-4 xl:pt-0"
          >
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              src={video}
              autoPlay
              muted
            ></video>
          </div>
        </div>
      </div>

      {/* Down arrow */}
      <div className={`arrow w-full h-16 absolute bottom-3 z-30 md:flex justify-center items-center hidden`}>
        <a href="#about">
          <h2 className="font-bold text-4xl 2xl:text-5xl text-[#2C2B2B]">
            <RiArrowDownDoubleFill />
          </h2>
        </a>
      </div>
    </section>
  );
};

export default Home;
