import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import OurServices from './components/OurServices'
import ClientProp from './components/ClientProp'
import News from './components/News'
import OurAdvisor from './components/OurAdvisor'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FinCalc from './components/FinCalc'
import './custom.css'
import FinancialTimeline from './components/FinancialTimeline'
import Lenis from '@studio-freight/lenis' 
import useScrollAnimation from './hooks/useScrollAnimation'



const App = () => {

  const lenisRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    lenisRef.current = lenis;
    
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  
  useScrollAnimation();
  

  return (
    <>
    <div className='relative'>
      <Navbar lenis={lenisRef}/>
      <Home />
      <About />
      <OurServices />
      <FinancialTimeline />
      <ClientProp />
      <News/>
      <OurAdvisor/>
      <ContactUs/>
      <Footer/>
      <FinCalc/>
    </div>
    </>
  );
};

export default App;
