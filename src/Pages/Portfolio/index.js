import React, { useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'
import ReactFloaterJs from 'react-floaterjs'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Spacer from './Parts/Spacer'
import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'
import Skill from './Parts/Skills'
import Timeline from './Parts/Timeline'
import PhotoGallery from './Parts/PhotoGallery'
import Connect from './Parts/Connect'

import MobileBackground from '../../Assets/Photos/MobileBackground.gif'

export default function Portfolio(props) {
  const scrollArea = useRef()
  return (
    <>
      <Parallax ref={scrollArea} pages={isMobile ? 3.8 : 3.5}>
      { !isMobile &&
          <ParallaxLayer offset={0.1} speed={-1.4}>
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
              <Spacer />
            </Canvas>
          </ParallaxLayer>}

      { !isMobile &&
        <ParallaxLayer offset={5.1} speed={1}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Spacer />
          </Canvas>
        </ParallaxLayer>}

        {/* <ParallaxLayer offset={isMobile? -3.8 :-2.4} speed={-3}>
          <div class="polygon yeetBackground" />
        </ParallaxLayer> */}

      {isMobile && 
        <ParallaxLayer offset={0} speed={.6}>
          <img className="mobileBackground" src={MobileBackground} alt=""/>
        </ParallaxLayer>}

      { !isMobile &&
        <ParallaxLayer offset={1} speed={1.3}>
          <div class="plane yeetBackground" />
        </ParallaxLayer>}

      { !isMobile &&
        <ParallaxLayer offset={0} speed={1}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Landing />
          </Canvas>
        </ParallaxLayer>}

        <ParallaxLayer offset={isMobile ? 0 : 1.25} speed={isMobile ? 1.2: 1}>
          <ReactFloaterJs>
            <Introduction />
          </ReactFloaterJs>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.8 : 2.45} speed={isMobile ? 1.15 : 1.3}>
          <Skill />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 2.45 : 3.5} speed={1}>
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 6.5 : 5.3} speed={isMobile ? 1.2 : 1}>
          <ReactFloaterJs>
            <Connect />
            {isMobile && <div className="introduction">(Also, check out the desktop version of this site)</div>}
          </ReactFloaterJs>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={5.2} speed={1}>
            <PhotoGallery />
        </ParallaxLayer> */}
      </Parallax>
    </>
  )
}
