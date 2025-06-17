import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import OurServices from './components/OurServices'
import ClientProp from './components/ClientProp'
import './custom.css'
import FinancialTimeline from './components/FinancialTimeline'
import Lenis from '@studio-freight/lenis' // ✅ correct import

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

  return (
    <>
      <Navbar lenis={lenisRef}/>
      <Home />
      <About />
      <OurServices />
      <FinancialTimeline />
      <ClientProp />
    </>
  );
};

export default App;
