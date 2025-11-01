'use client';

import { useEffect } from "react";
import Reviews from "./components/Reviews";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import CustomCursor from "./components/CustomCursor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EventsGallery from "./components/Gallery";

export default function Home() {
  useEffect(() => {
   
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

     
      return () => {
        lenis.destroy();
      };
    };

    const cleanup = initLenis();

    return () => {
      cleanup.then(fn => fn && fn());
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <EventsGallery />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
