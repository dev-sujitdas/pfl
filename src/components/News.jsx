import React, { useEffect, useState } from "react";
// import { getFinancialNews } from "../api/news";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const url = ["https://www.moneyweb.co.za/moneyweb-insider/newsletters/", "http://pfl-newsletter.s3-website-eu-west-1.amazonaws.com/"];
const News = () => {
  // const [showArticles, setShowArticles] = useState([]);
  
  // useEffect(() => {
  //   try {
  //     const fetchNews = async () => {
  //       const data = await getFinancialNews();
  //       if (data) {
  //         setShowArticles(data.sort(() => 0.5 - Math.random()).slice(0, 3));         
  //       } else {
  //         throw Error(err);
  //       }
  //     };
  //     fetchNews();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);


  useGSAP(() => {
  const ctx = gsap.context(() => {
    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".news-top",
        start: "top 85%",
        end: "top 50%",
      },
    });

    titleTimeline.from(".news-top h2, .news-top h3", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    titleTimeline.fromTo(
      ".news-top .line",
      { width: "0", x: "7rem", opacity: 0 },
      {
        width: "7rem",
        x: "0",
        opacity: 1,
        ease: "power2.out",
      },
      "<" 
    );

    gsap.from(".news-subtitle .subtitle", {
      scrollTrigger: {
        trigger: ".news-subtitle",
        start: "top 80%",
        end: "top 40%",
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.from(".news-card-wrapper", {
      scrollTrigger: {
        trigger: ".news-card-wrapper",
        start: "top 90%",
        end: "top 50%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <section id="news" className="w-full relative z-50 bg-[#EEF4EA]">
      <div className="w-full max-w-[150rem] mx-auto md:p-[3rem] xl:px-[7rem] xl:py-[3rem] p-[2rem]  bg-emerald-900 ">
        <div className="w-full news-top flex justify-between items-center">
          <div className=" h-[3.75rem] overflow-hidden flex items-center">
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl poppins-semibold text-[#fdfdfd]">
             Newsroom Highlights
            </h2>
          </div>       
        </div>

        <div className="news-subtitle">
          <h3 className="subtitle  text-lg lg:text-xl poppins-regular-italic w-full xl:w-[30%] text-zinc-400">
            Stay informed with the latest in finance and market trends.
          </h3>
        </div> 

        <div className="news-card-wrapper flex gap-4 mt-5 items-center">
          <i className="h-16 w-16"><img src="/Icons/newsletter.png" alt="" /></i>
          <a target="_blank" href={url[1]}>
          <button className="nsltr px-5 py-2 rounded-full bg-[#fdfdfd] text-base md:text-xl lg:text-2xl poppins-semibold cursor-pointer hover:bg-[#BA8748] hover:text-white">            
                  View Our Newsletter                
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
