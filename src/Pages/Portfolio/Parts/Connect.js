import React from 'react'

import GitHub from '../../../Assets/Icons/GitHub.png'
import Instagram from '../../../Assets/Icons/Instagram.png'
import LinkedIn from '../../../Assets/Icons/LinkedIn.png'

export default function Connect() {
  return (
    <div className="connect">
      <div className="connect__header">Let's Connect</div>
      <div className="connect__options">
        <a href="https://github.com/HaileLakew" target="_blank" rel="noopener noreferrer">
          <img className="connect__icons" src={GitHub} alt="" />
        </a>
        <a href="https://www.instagram.com/haile.lakew/?hl=en" target="_blank" rel="noopener noreferrer">
          <img className="connect__icons" src={Instagram} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/haile-lakew-334159a8/" target="_blank" rel="noopener noreferrer">
          <img className="connect__icons" src={LinkedIn} alt="" />
        </a>
      </div>
    </div>
  )
}
