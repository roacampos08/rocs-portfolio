'use client';
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { SiReact, SiJavascript, SiTailwindcss, SiPowerbi } from "react-icons/si";

const techIcons = {
  'React': <SiReact className="w-5 h-5" />,
  'JavaScript': <SiJavascript className="w-5 h-5" />,
  'Tailwind': <SiTailwindcss className="w-5 h-5" />,
  'Power BI': <SiPowerbi className="w-5 h-5" />,
  'API': <span>🔗</span>,
  'Development': <span>💻</span>,
  'Web-design': <span>🎨</span>,
  'eCommerce': <span>🛒</span>,
};

export default function Work() {
  const containerRef = useRef(null);
  const groupRef = useRef(null);
  const progressRef = useRef(null);

  const works = [
    {
      imgSrc: '/images/dexpert.png',
      title: 'Dexpert – Build Experience',
      tags: ['Full-Stack', 'NextJS', 'Stripe', 'API', 'Clerk', 'Prisma'],
      projectLink: 'https://dexpert-lake.vercel.app/',
    },
    {
      imgSrc: '/images/dinatours.png',
      title: 'Full stack travel destination app',
      tags: ['API', 'NextJS', 'Prisma', 'Clerk', 'Development'],
      projectLink: 'https://dinatours.vercel.app'
    },
    {
      imgSrc: '/images/dash.png',
      title: 'Interactive dashboard in Power BI',
      tags: ['Data', 'Power BI', 'Analytics'],
      projectLink: 'https://drive.google.com/file/d/1RNhWNItp8I9ifV7WqNqWopFm4ZmY1pM1/view?usp=sharing'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !groupRef.current || !progressRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

     
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;
      const totalScroll = scrollHeight - viewportHeight;
      
      let progress = 0;
      let isInView = false;
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        progress = Math.abs(scrollStart) / totalScroll;
        isInView = true;
      } else if (scrollEnd < 0) {
        progress = 1;
      }

     
      progress = Math.max(0, Math.min(1, progress));

     
      const maxTranslate = (works.length - 1) * 100;
      groupRef.current.style.transform = `translateX(-${progress * maxTranslate}vw)`;

     
      if (isInView) {
        progressRef.current.style.opacity = '1';
        progressRef.current.style.transform = `scaleX(${progress})`;
      } else {
        progressRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [works.length]);

  return (
    <section id="work" className="pt-20 lg:pt-32">
      
      <div className="px-4 mx-auto lg:px-8 xl:max-w-6xl mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-center">
          My Recent Works
        </h2>
      </div>

     
      <div ref={containerRef} className="relative" style={{ height: `${works.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div 
            ref={groupRef}
            className="flex h-full transition-transform duration-100 ease-out"
          >
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <div
                key={key}
                className="flex-shrink-0 w-screen h-full flex items-center justify-center px-4"
              >
                <div className="max-w-md w-full scale-90">
                  <ProjectCard
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                  />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div 
        ref={progressRef}
        className="fixed left-0 right-0 bottom-12 h-1 bg-gradient-to-r from-[#2196F3] to-[#64B5F6] origin-left transition-opacity duration-300 z-50"
        style={{ transform: 'scaleX(0)', opacity: 0 }}
      />

     
      <div className="h-[40vh] flex items-center justify-center">
        <p className="text-zinc-400 text-lg">
          Explore more projects on{' '}
          <a 
            href="https://github.com/usernumber89" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2196F3] hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
