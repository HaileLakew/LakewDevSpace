import React, { useRef, useState } from 'react'
import ReactFloaterJs from 'react-floaterjs'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import { isMobile } from 'react-device-detect'

import Image from '../../../Assets/Photos/Img10.webp'

import { useSpring, animated, config } from 'react-spring'

// import "./styles.css";

const calc = (x, y, rect) => [-(y - rect.top - rect.height / 2) / 5, (x - rect.left - rect.width / 2) / 5, 1.4]
const trans = (x, y, s) => `perspective(600px) rotateX(${x / 99}deg) rotateY(${y / 99}deg) scale(${s})`

function ProgressBar({ amount }) {
  return (
    <Progress
      theme={{
        active: {
          color: isMobile ? '#ff6961' : '#301934',
          trailColor: '#ffffff00'
        }
      }}
      percent={amount}
    />
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config['default'] })
  return (
    <div className="skills skills__flex">
      <ReactFloaterJs>
        <img className="skills__profile-pic" src={Image} alt="It's me Haile" />
      </ReactFloaterJs>

      <div className="skills__loader-container" ref={ref}>
        <animated.div
          className="ccard"
          style={{ transform: props.xys.to(trans) }}
          onMouseLeave={() => set([0, 0, 1])}
          onMouseMove={(e) => {
            if (isMobile) return
            const rect = ref.current.getBoundingClientRect()
            set(calc(e.clientX, e.clientY, rect))
          }}>
          <h1 style={{ paddingLeft: '1%' }}>Here's What I Can Do</h1>
          <div className="skills__loader">
            Javascript <ProgressBar amount={80} />{' '}
          </div>
          <div className="skills__loader">
            React <ProgressBar amount={70} />{' '}
          </div>
          <div className="skills__loader">
            React Native <ProgressBar amount={40} />{' '}
          </div>
          <div className="skills__loader">
            Node <ProgressBar amount={40} />{' '}
          </div>
          <div className="skills__loader">
            Electron <ProgressBar amount={60} />{' '}
          </div>
          <div className="skills__loader">
            Mustache Templating/JSX <ProgressBar amount={99} />{' '}
          </div>
          <div className="skills__loader">
            SCSS/Sass <ProgressBar amount={80} />{' '}
          </div>
        </animated.div>
      </div>
    </div>
  )
}
