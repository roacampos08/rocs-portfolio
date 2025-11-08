'use client'
import React from 'react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Digital Skills for Professionals',
      issuer: 'Google Digital Academy (Skillshop)',
      date: 'May 2025',
      credentialId: '389569176',
      link: '#',
      skills: ['Problem Solving']
    },
    {
      id: 2,
      title: 'Effective Communication',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0415001014377',
      link: '#',
      skills: ['Teamwork', 'Effective Communication']
    },
    {
      id: 3,
      title: 'Project Management and Agile Methodology Fundamentals',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0412001008421',
      link: '#',
      skills: ['Teamwork', 'Agile Methodologies', 'Scrum', 'Time Management', 'Project Management']
    },
    {
      id: 4,
      title: 'Leadership',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0415001016672',
      link: '#',
      skills: ['Teamwork', 'Leadership Development', 'Leadership']
    },
    {
      id: 5,
      title: 'Excel Associate Microsoft 365 Apps',
      issuer: 'Certiport - A Pearson VUE Business',
      date: 'November 2024',
      credentialId: 'uLuK-XaqA',
      link: '#',
      skills: ['Microsoft Office', 'Data Analysis']
    },
    {
      id: 6,
      title: 'Introduction to Impact Evaluation for Public Management',
      issuer: 'ODILO',
      date: '2024',
      credentialId: '11ee8a72a46b31b3abfb5dc50a692',
      link: '#',
      skills: ['Public Management']
    },
    {
      id: 7,
      title: 'Git and Github',
      issuer: 'Udemy - KODIGO',
      date: '2024',
      credentialId: 'UC-1c64dcbf-22eb-4b18-8afa-47b3a53d9eb5',
      link: '#',
      skills: ['Git', 'GitHub', 'Version Control']
    }
  ]

  return (
    <section id='certificates' className='py-20 md:py-24 lg:py-28'>
      <div className='px-4 mx-auto md:px-6 lg:px-8 xl:max-w-5xl'>
        
        {/* Header */}
        <div className='mb-12 md:mb-16'>
          <div className='flex items-center gap-3 mb-3'>
            <div className='h-px flex-1 bg-gradient-to-r from-transparent to-zinc-700'></div>
            <span className='text-xs uppercase tracking-widest text-zinc-500 font-medium'>Certifications</span>
            <div className='h-px flex-1 bg-gradient-to-l from-transparent to-zinc-700'></div>
          </div>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-3'>
            Professional Credentials
          </h2>
          <p className='text-zinc-400 text-sm md:text-base text-center max-w-2xl mx-auto'>
            Continuous learning through industry-recognized certifications and specialized training
          </p>
        </div>

        {/* Certificates List */}
        <div className='space-y-4 md:space-y-5'>
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group block'
            >
              <div className='relative overflow-hidden rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:border-sky-400/50 hover:bg-zinc-800/60 transition-all duration-300 p-5 md:p-6'>
                
                {/* Main Content Grid */}
                <div className='flex flex-col md:flex-row md:items-start gap-4'>
                  
                  {/* Icon */}
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400/20 to-sky-600/20 border border-sky-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <Award className='w-6 h-6 text-sky-400' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0'>
                    {/* Title and External Link */}
                    <div className='flex items-start justify-between gap-3 mb-2'>
                      <h3 className='text-lg md:text-xl font-semibold group-hover:text-sky-400 transition-colors duration-300'>
                        {cert.title}
                      </h3>
                      <ExternalLink className='flex-shrink-0 w-5 h-5 text-zinc-500 group-hover:text-sky-400 transition-colors duration-300' />
                    </div>

                    {/* Issuer */}
                    <p className='text-sm md:text-base text-zinc-300 mb-3'>
                      {cert.issuer}
                    </p>

                    {/* Meta Info */}
                    <div className='flex flex-wrap items-center gap-3 md:gap-4 text-xs text-zinc-500 mb-3'>
                      <div className='flex items-center gap-1.5'>
                        <Calendar className='w-3.5 h-3.5' />
                        <span>{cert.date}</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <span className='text-zinc-600'>•</span>
                        <span>ID: {cert.credentialId}</span>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className='flex flex-wrap gap-2'>
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className='px-2.5 py-1 text-xs font-medium bg-zinc-700/50 text-zinc-300 rounded-md border border-zinc-600/50'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/50 transition-all duration-500'></div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}