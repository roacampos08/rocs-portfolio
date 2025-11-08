
'use client'
import React, { useState } from 'react'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'

export default function EventsGallery() {
  const events = [
    
    {
      id: 1,
      title: 'Expo 2024',
      role: 'Speaker',
      date: 'September 2024',
      location: '¡Supérate! Hilasal Center, San Andrés',
      image: '/images/event2.jpg',
      description: 'Presenting an innovative platform'
    },
    {
      id: 2,
      title: 'Odoo Business Show',
      role: 'Participant',
      date: 'May 2025',
      location: 'Hotel Sheraton, San Salvador',
      image: '/images/event1.jpg',
      description: 'Exploring software solutions for business management'
    },
    {
      id: 3,
      title: 'Expo Tech 2025',
      role: 'Speaker',
      date: 'July 2025',
      location: 'Hotel Hilton, San Salvador',
      image: '/images/rodrigo.jpg',
      description: 'Presenting a platform for gaining work experience'
    },
    {
      id: 4,
      title: 'Expo 2025',
      role: 'Host',
      date: 'October 2025',
      location: '¡Supérate! Hilasal Center, San Andrés',
      image: '/images/rodri.jpg',
      description: 'Hosting the annual Expo event'
    }
  ]

  return (
    <section id='events' className='py-20 md:py-24 lg:py-28 bg-zinc-900/30'>
      <div className='px-4 mx-auto md:px-6 lg:px-8 xl:max-w-5xl'>
        
        {/* Header */}
        <div className='mb-12 md:mb-16'>
          <div className='flex items-center gap-3 mb-3'>
            <div className='h-px flex-1 bg-gradient-to-r from-transparent to-zinc-700'></div>
            <span className='text-xs uppercase tracking-widest text-zinc-500 font-medium'>Events</span>
            <div className='h-px flex-1 bg-gradient-to-l from-transparent to-zinc-700'></div>
          </div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3'>
            Community & Collaboration
          </h2>
          <p className='text-zinc-400 text-sm md:text-base text-center max-w-2xl mx-auto'>
            Building connections through conferences, workshops, and shared learning experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
          {events.map((event, index) => (
            <div
              key={event.id}
              className='group relative'
            >
              {/* Card Container */}
              <div className='relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:border-sky-400/30 transition-all duration-500 h-full'>
                
                {/* Image Section */}
                <div className='relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-zinc-700 to-zinc-800'>
                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  
                  {/* Dark overlay */}
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500'></div>
                  
                  {/* Role badge */}
                  <div className='absolute top-4 right-4'>
                    <span className='px-3 py-1.5 text-xs font-medium bg-black/60 backdrop-blur-md text-sky-400 rounded-full border border-sky-400/20'>
                      {event.role}
                    </span>
                  </div>

                  
                </div>

                {/* Content Section */}
                <div className='p-5 md:p-6'>
                  <h3 className='text-lg md:text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors duration-300'>
                    {event.title}
                  </h3>
                  
                  <p className='text-sm text-zinc-400 mb-4 line-clamp-2'>
                    {event.description}
                  </p>

                  {/* Meta info */}
                  <div className='flex flex-wrap gap-4 text-xs text-zinc-500'>
                    <div className='flex items-center gap-1.5'>
                      <Calendar className='w-3.5 h-3.5' />
                      <span>{event.date}</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <MapPin className='w-3.5 h-3.5' />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/50 transition-all duration-500'></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
