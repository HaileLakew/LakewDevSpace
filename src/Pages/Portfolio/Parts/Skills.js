import React from 'react'
import ReactFloaterJs from 'react-floaterjs'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import Image from '../../../Assets/Img10.JPG'

function ProgressBar({ amount }) {
  return (
    <Progress
      theme={{
        active: {
          color: '#26142a'
        }
      }}
      percent={amount}
    />
  )
}

export default function Introduction() {
  return (
    <div className="skills skills__flex">
      <ReactFloaterJs>
        <img className="skills__profile-pic" src={Image} alt="It's me Haile" />
      </ReactFloaterJs>

      <div className="skills__loader-container">
        <h1 style={{ paddingLeft: '1%' }}>Here's What I Can Do</h1>
        <div className="skills__loader">
          {' '}
          Javascript <ProgressBar amount={80} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          React <ProgressBar amount={70} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          React Native <ProgressBar amount={40} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          Node <ProgressBar amount={40} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          Electron <ProgressBar amount={60} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          Mustache Templating/JSX <ProgressBar amount={99} />{' '}
        </div>
        <div className="skills__loader">
          {' '}
          SCSS/Sass <ProgressBar amount={80} />{' '}
        </div>
      </div>
    </div>
  )
}
