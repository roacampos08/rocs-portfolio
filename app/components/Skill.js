import React from 'react'
import SkillCard from './SkillCard'

export default function Skill() {
  const skillItems = [
    { imgSrc: '/images/powerbi.svg', label: 'Power BI', desc: 'Business Intelligence' },
    { imgSrc: '/images/excel.svg', label: 'Excel', desc: 'Data Analysis' },
    { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
    { imgSrc: '/images/nextjs.svg', label: 'NextJS', desc: 'React Framework' },
    { imgSrc: '/images/prisma.svg', label: 'Prisma', desc: 'Database' },
    { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design tool' },
    { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
    { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
  ]

  return (
    <section className='pt-20 lg:pt-32'>
      <div className='px-4 mx-auto lg:px-8 xl:max-w-6xl'>
        <h2 className='text-3xl lg:text-4xl lg:leading-tight font-semibold'>
          Essential Tools I Use
        </h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I utilize to create exceptional digital experiences and data solutions.
        </p>

        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillItems.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={index}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
