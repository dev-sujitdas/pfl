import React, { useEffect, useRef, useState } from "react";
import "./custom.css";
import Loader from "./components/Loader";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import OurServices from "./components/OurServices";
import FinancialTimeline from "./components/FinancialTimeline";
import ClientProp from "./components/ClientProp";
import News from "./components/News";
import OurAdvisor from "./components/OurAdvisor";
import OurApp from "./components/OurApp";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import FinCalc from "./components/FinCalc";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const appLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    appLoad();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <Navbar lenis={lenisRef} />
          <Home />
          <About />
          <OurServices />
          <FinancialTimeline />
          <ClientProp />
          <News />
          <OurAdvisor />
          <OurApp />
          <ContactUs />
          <Footer />
          {/* <FinCalc/> */}
        </>
      )}
    </>
  );
};

export default App;
