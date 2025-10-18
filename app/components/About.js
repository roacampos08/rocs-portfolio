'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const aboutItems = [
    { label: 'Certifications earned', number: 9, suffix: '+' },
    { label: 'Tools mastered', number: 8, suffix: '' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-24 md:pt-28 lg:pt-32 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 md:p-12 rounded-3xl shadow-lg border border-zinc-700/40">
        
        <p className="text-zinc-200 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl">
          Hi! I'm Rodrigo and I'm a student of{' '}
          <span className="font-semibold text-sky-400">
            Technological Management and Data Analytics
          </span>{' '}
          | Aspiring Data Analyst passionate about transforming data into{' '}
          <span className="text-sky-400 font-medium">
            valuable insights
          </span>{' '}
          that drive strategic decisions, optimize processes, and create a real impact
          within organizations.
        </p>

        {/* Estadísticas e imagen */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Estadísticas */}
          <div className="flex gap-8 md:gap-14">
            {aboutItems.map(({ label, number, suffix }, key) => (
              <div
                key={key}
                className="text-center md:text-left transition-transform duration-300 hover:scale-105"
              >
                <span className="block text-5xl font-extrabold text-white">
                  <AnimatedNumber 
                    value={number} 
                    suffix={suffix} 
                    isVisible={isVisible}
                  />
                </span>
                <p className="text-sm text-zinc-400 md:text-base">{label}</p>
              </div>
            ))}
          </div>

          {/* Imagen decorativa */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/rocs.png"
              alt="About logo"
              width={150}
              height={150}
              className="opacity-85 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente para animar números
function AnimatedNumber({ value, suffix, isVisible }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; 
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}