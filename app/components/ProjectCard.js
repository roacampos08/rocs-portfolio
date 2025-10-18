import React from 'react'
import PropTypes from 'prop-types'
import { IoArrowForward } from 'react-icons/io5'

export default function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}) {
 
 
  return (
    <div
      className={
        "group relative p-5 rounded-2xl bg-zinc-800/80 hover:bg-zinc-700/60 active:bg-zinc-700/70 " +
        "ring-1 ring-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 " +
        "overflow-hidden cursor-pointer " +
        classes
      }
    >
      {/* Project Image */}
      <figure className="aspect-[4/3] rounded-xl overflow-hidden mb-5 relative">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full rounded-xl transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent opacity-70"></div>
      </figure>

      {/* Project Info */}
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-700/50 rounded-lg backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full grid place-items-center bg-sky-400 text-zinc-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <IoArrowForward className="text-lg" />
      </div>

      {/* Clickable link overlay */}
      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
}
