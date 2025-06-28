import React, { useEffect, useRef, useState } from "react";
import "./custom.css";
import Lenis from "@studio-freight/lenis";
const Loader = React.lazy(()=> import('./components/Loader')) ;
const Navbar = React.lazy(()=> import('./components/Navbar')) ;
const Home = React.lazy(()=> import('./components/Home')) ;
const About = React.lazy(()=> import('./components/About')) ;
const OurServices = React.lazy(()=> import('./components/OurServices')) ;
const FinancialTimeline = React.lazy(()=> import('./components/FinancialTimeline'));
const ClientProp = React.lazy(()=> import('./components/ClientProp'));
const News = React.lazy(()=> import('./components/News'));
const OurAdvisor = React.lazy(()=> import('./components/OurAdvisor'));
const OurApp = React.lazy(()=> import('./components/OurApp'));
const ContactUs = React.lazy(() => import('./components/ContactUs'));
const Footer = React.lazy(()=> import('./components/Footer'));


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
        <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>                 
        </>
      )}
    </>
  );
};

export default App;
