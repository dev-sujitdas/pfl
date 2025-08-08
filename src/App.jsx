import React, { useEffect, useRef, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./custom.css";
import Lenis from "@studio-freight/lenis";
const Loader = React.lazy(() => import("./components/Loader"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Diffrentiator = React.lazy(() => import("./components/Diffrentiator"));
const OurServices = React.lazy(() => import("./components/OurServices"));
const FinancialTimeline = React.lazy(() => import("./components/FinancialTimeline"));
const ClientProp = React.lazy(() => import("./components/ClientProp"));
const RiskCover = React.lazy(() => import("./components/RiskCover"));
const OurAdvisor = React.lazy(() => import("./components/OurAdvisor"));
const News = React.lazy(() => import("./components/News"));
const OurApp = React.lazy(() => import("./components/OurApp"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const Footer = React.lazy(() => import("./components/Footer"));
const Fincalc = React.lazy(() => import("./components/FinCalc/FinCalc"));
const FinancialNeedsAnalysis = React.lazy(()=> import("./components/FinancialNeedsAnalysis"));


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
          <Suspense fallback={<Loader isLoading={isLoading} />}>
            <Navbar lenis={lenisRef} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    {/* <Diffrentiator lenis={lenisRef}/> */}
                    <OurServices />                    
                    <FinancialTimeline />
                    <ClientProp />
                    <RiskCover />
                    <OurAdvisor />
                    <News />
                    <OurApp />
                    <ContactUs />
                    <Fincalc />
                  </>
                }
              />
              <Route
                path="/FinancialNeedsAnalysis"
                element={<FinancialNeedsAnalysis />}
              />
            </Routes>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
