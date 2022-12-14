import React from 'react'
import uniquid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Icon } from '@iconify/react';
import './style.css'


const PrContainer = ({ projects }) => (
    <div className='projects'>
        <h3>{projects.name}</h3> 

        <p className='project-desc'>{projects.description}</p>
    {projects.stack && (
      <ul className='project-stack'>
        {projects.stack.map((item) => (
          <li key={uniquid()} className='project-stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {projects.sourceCode && (
      <a
        href={projects.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {/* {projects.liveDeploy && (
      <a
        href={projects.liveDeploy}
        aria-label='link preview'
        className='link link--icon'
      >
        <Icon icon="logos:heroku-icon" />
      </a>
    )} */}
  </div>
)

export default PrContainer
