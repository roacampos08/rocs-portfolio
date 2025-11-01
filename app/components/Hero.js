'use client'
import React from 'react'
import Button from './Button'
import { Linkedin, ChevronDown } from 'lucide-react'
import { IoDownload } from 'react-icons/io5'
import Button2 from './Button2'

export default function Hero() {
 
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about') || document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
 
  return (
    <section id='home' className='pt-20 md:pt-24 lg:pt-28 relative'>
      <div className='px-4 mx-auto md:px-6 lg:px-8 xl:max-w-5xl md:grid md:grid-cols-2 items-center md:gap-8'>
        
        {/* Texto principal */}
        <div className='text-center md:text-left'>
          {/* Avatar + Estado */}
          <div className='flex justify-center md:justify-start items-center gap-2'>
            <figure className='bg-zinc-700 overflow-hidden w-8 h-8 rounded-lg'>
              <img
                src='/images/principal.png'
                width={32}
                height={32}
                alt='Hero Image'
                className='w-full h-full object-cover'
              />
            </figure>

            <div className='flex items-center gap-1.5 text-zinc-400 text-xs tracking-wide'>
              <span className='relative w-1.5 h-1.5 rounded-full bg-emerald-400'>
                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Título principal */}
          <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold leading-tight max-w-[22ch] md:max-w-[19ch] lg:max-w-[15ch] mx-auto md:mx-0 mt-4 mb-5'>
            Turning complexity into clarity with advanced data analysis
          </h2>

          {/* Botones */}
          <div className='flex justify-center md:justify-start gap-2.5'>
            <Button label={"Download CV"}  icon={<IoDownload />} />
            <Button2 label={"LinkedIn"} href={"https://www.linkedin.com/in/rodrigo-campos8/"} icon={<Linkedin />} />
          </div>
        </div>

        
        <div className='hidden md:block'>
         <figure className='w-full max-w-[240px] md:max-w-[260px] lg:max-w-[300px] mx-auto md:ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[35px] overflow-hidden'>
            <img
              src='/images/ro.png'
              width={300}
              height={260}
              alt='Hero Image'
              className='w-full h-auto object-cover'
            />
          </figure>
        </div>

      </div>

      {/* Botón de scroll minimalista */}
      <button 
        onClick={scrollToNextSection}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 hover:text-zinc-100 transition-colors'
        aria-label='Scroll to next section'
      >
        <ChevronDown className='w-6 h-6 animate-bounce' />
      </button>
    </section>
  )
}