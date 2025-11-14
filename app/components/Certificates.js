'use client'
import React, { useState } from 'react'
import { Award, ExternalLink, Calendar, FileText, X } from 'lucide-react'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'Digital Skills for Professionals',
      issuer: 'Google Digital Academy (Skillshop)',
      date: 'May 2025',
      credentialId: '389569176',
      link: 'https://skillshop.exceedlms.com/student/award/Yg6shBrAUUTn3x5srfnXMdzS',
      skills: ['Problem Solving'],
      isPDF: false
    },
    {
      id: 2,
      title: 'First Place at Expo Tech 2025 - Digital Talent Project',
      issuer: 'Programa Empresarial ¡Supérate!',
      date: 'July 2025',
      credentialId: '2025',
      link: '/reconocimiento.pdf',
      skills: ['Teamwork','Leadership', 'Problem Solving','Creativity', 'Innovation', 'Communication'],
      isPDF: true,
      thumbnail: '/images/cert-preview-1.jpg' // placeholder
    },
    {
      id: 3,
      title: 'Effective Communication',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0415001014377',
      link: '/comunicacion.pdf',
      skills: ['Teamwork', 'Effective Communication'],
      isPDF: true,
      thumbnail: '/images/cert-preview-2.jpg'
    },
    {
      id: 4,
      title: 'Project Management and Agile Methodology Fundamentals',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0412001008421',
      link: '/proyectos.pdf',
      skills: ['Teamwork', 'Agile Methodologies', 'Scrum', 'Time Management', 'Project Management'],
      isPDF: true,
      thumbnail: '/images/cert-preview-3.jpg'
    },
    {
      id: 5,
      title: 'Leadership',
      issuer: 'Santander Open Academy',
      date: 'April 2025',
      credentialId: 'OA-2025-0415001016672',
      link: '/liderazgo.pdf',
      skills: ['Teamwork', 'Leadership Development', 'Leadership'],
      isPDF: true,
      thumbnail: '/images/cert-preview-4.jpg'
    },
    {
      id: 6,
      title: 'Excel Associate Microsoft 365 Apps',
      issuer: 'Certiport - A Pearson VUE Business',
      date: 'November 2024',
      credentialId: 'uLuK-XaqA',
      link: 'https://www.certiport.com/portal/pages/credentialverification.aspx',
      skills: ['Microsoft Office', 'Data Analysis'],
      isPDF: false
    },
    {
      id: 7,
      title: 'Introduction to Impact Evaluation for Public Management',
      issuer: 'ODILO',
      date: '2024',
      credentialId: '11ee8a72a46b31b3abfb5dc50a692',
      link: '/gestion_p.pdf',
      skills: ['Public Management'],
      isPDF: true,
      thumbnail: '/images/cert-preview-5.jpg'
    },
    {
      id: 8,
      title: 'Git and Github',
      issuer: 'Udemy - KODIGO',
      date: '2024',
      credentialId: 'UC-1c64dcbf-22eb-4b18-8afa-47b3a53d9eb5',
      link: 'https://www.udemy.com/certificate/UC-1c64dcbf-22eb-4b18-8afa-47b3a53d9eb5/',
      skills: ['Git', 'GitHub', 'Version Control'],
      isPDF: false
    }
  ]

  const handleCertClick = (cert, e) => {
    if (cert.isPDF) {
      e.preventDefault()
      setSelectedCert(cert)
    }
  }

  return (
    <>
      <section id='certificates' className='py-20 md:py-24 lg:py-28'>
        <div className='px-4 mx-auto md:px-6 lg:px-8 xl:max-w-6xl'>
          
          {/* Header */}
          <div className='mb-8 md:mb-12'>
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

          {/* Certificates Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            {certificates.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group block'
                onClick={(e) => handleCertClick(cert, e)}
              >
                <article className='relative h-full overflow-hidden rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:border-sky-400/50 transition-all duration-300'>
                  
                  {/* Preview/Icon Section */}
                  <div className='relative h-48 bg-gradient-to-br from-zinc-700 to-zinc-800 overflow-hidden'>
                    {cert.isPDF ? (
                      // PDF Preview placeholder
                      <div className='absolute inset-0 flex items-center justify-center bg-zinc-800'>
                        <FileText className='w-16 h-16 text-zinc-600' />
                      </div>
                    ) : (
                      // External link indicator
                      <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500/20 to-sky-700/20'>
                        <Award className='w-16 h-16 text-sky-400/50' />
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300'></div>
                    
                    {/* Badge */}
                    <div className='absolute top-3 left-3'>
                      <span className='px-2.5 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-sky-400 rounded-full border border-sky-400/30'>
                        {cert.isPDF ? 'Certificate' : 'External'}
                      </span>
                    </div>

                    {/* Action Icon */}
                    <div className='absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-sky-400 group-hover:border-sky-400 transition-all duration-300'>
                      {cert.isPDF ? (
                        <FileText className='w-4 h-4 text-white' />
                      ) : (
                        <ExternalLink className='w-4 h-4 text-white' />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-5'>
                    {/* Title */}
                    <h3 className='text-base md:text-lg font-semibold mb-2 group-hover:text-sky-400 transition-colors duration-300 line-clamp-2'>
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className='text-sm text-zinc-300 mb-3'>
                      {cert.issuer}
                    </p>

                    {/* Meta Info */}
                    <div className='flex flex-wrap items-center gap-3 text-xs text-zinc-500 mb-3'>
                      <div className='flex items-center gap-1.5'>
                        <Calendar className='w-3.5 h-3.5' />
                        <span>{cert.date}</span>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <span className='text-zinc-600'>•</span>
                        <span className='truncate'>ID: {cert.credentialId}</span>
                      </div>
                    </div>

                    {/* Skills Tags - Max 3 visible */}
                    <div className='flex flex-wrap gap-1.5'>
                      {cert.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className='px-2 py-0.5 text-xs font-medium bg-zinc-700/50 text-zinc-300 rounded border border-zinc-600/50'
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className='px-2 py-0.5 text-xs font-medium text-zinc-500'>
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/50 transition-all duration-500'></div>
                </article>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* PDF Modal */}
      {selectedCert && (
        <div 
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className='relative w-full max-w-4xl h-[90vh] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-700'>
              <div className='flex-1 min-w-0 pr-4'>
                <h3 className='text-lg font-semibold text-white truncate'>
                  {selectedCert.title}
                </h3>
                <p className='text-sm text-zinc-400 truncate'>
                  {selectedCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className='flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors'
              >
                <X className='w-5 h-5' />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className='w-full h-full pt-20'>
              <iframe
                src={selectedCert.link}
                className='w-full h-full'
                title={selectedCert.title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}