import React from 'react'
import PropTypes from 'prop-types'



export default function Button2({ href, target = '_blank', label, icon, classes }) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={
          "px-6 py-2 gap-2 flex items-center rounded-xl border border-zinc-500 text-zinc-200 hover:bg-zinc-800 transition-colors duration-200 font-medium " +
          classes
        }
      >
        {label}
        {icon ? <span>{icon}</span> : null}
      </a>
    )
  } else {
    return (
      <button
        className={
          "px-6 py-2  rounded-xl border border-zinc-500 text-zinc-200 hover:bg-zinc-800 transition-colors duration-200 font-medium flex items-center gap-2 " +
          classes
        }
      >
        {label}
        {icon ? <span>{icon}</span> : null}
      </button>
    )
  }
}

Button2.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  classes: PropTypes.string,
}
