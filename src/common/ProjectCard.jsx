import React from 'react'

function ProjectCard({src, link, h3, p}) {
  return (
    <a href={link} target='blank'>
        <img className='hover' src={src} alt="Viber logo" />
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard