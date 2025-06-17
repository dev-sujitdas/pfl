import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
  const selectors = [".about-top", ".service-top", ".timeline-top", ".client-top"];
  useGSAP(() => {
    
    selectors.forEach((selector) => {
      animateHeading(selector);
      animateLine(selector);
    });

    // Sapling
    gsap.from(".sapling", {
      scrollTrigger: {
        trigger: ".about-top",
        start: "top 60%",
        end: "top 0",
        scrub: 1,
      },
      opacity: 0,
      ease: "power2.out",
    });

    // Our Roots
    gsap.from(".our-roots", {
      scrollTrigger: {
        trigger: ".our-roots",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Core Value Cards
    gsap.from(".core-value-card-wrapper", {
      scrollTrigger: {
        trigger: ".core-value-card-wrapper",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
      scale: 0.9,
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    // Testimonials
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
      y: 60,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out",
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
};

// Reusable animation helpers
const animateHeading = (triggerSelector) => {
  gsap.from(`${triggerSelector} h2, ${triggerSelector} h3`, {
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top 60%",
      end: "top 0",
      scrub: 1,
    },
    y: 80,
    stagger: 0.2,
    ease: "power2.out",
  });
};

const animateLine = (triggerSelector, lineSelector = ".line") => {
  gsap.fromTo(
    lineSelector,
    { width: "0", x: "7rem" },
    {
      scrollTrigger: {
        trigger: triggerSelector,
        start: "top 60%",
        end: "top 0",
        scrub: 1,
      },
      width: "7rem",
      x: "0",
      ease: "power2.out",
    }
  );
};

export default useScrollAnimation;
