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

export default function Portfolio(props) {
  const scrollArea = useRef()
  return (
    <>
      <Parallax ref={scrollArea} pages={isMobile ? 4.4 : 3.5}>
      { !isMobile &&
          <ParallaxLayer offset={0.1} speed={-1.5}>
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
              <Spacer />
            </Canvas>
          </ParallaxLayer>}

      { !isMobile &&
        <ParallaxLayer offset={isMobile ? 7 : 5} speed={1}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Spacer />
          </Canvas>
        </ParallaxLayer>}

        {/* <ParallaxLayer offset={isMobile? -3.8 :-2.4} speed={-3}>
          <div class="polygon yeetBackground" />
        </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={1.55}>
          <div class="plane yeetBackground" />
        </ParallaxLayer>

        { !isMobile &&
        <ParallaxLayer offset={0} speed={1}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Landing />
          </Canvas>
        </ParallaxLayer>}

        <ParallaxLayer offset={isMobile?0:1.25} speed={1}>
          <ReactFloaterJs>
            <Introduction />
          </ReactFloaterJs>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 1.6 : 2.45} speed={1.3}>
          <Skill />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 2.4 : 3.5} speed={1}>
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 7.15 : 5.3} speed={1}>
          <ReactFloaterJs>
            <Connect />
          </ReactFloaterJs>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={5.2} speed={1}>
            <PhotoGallery />
        </ParallaxLayer> */}
      </Parallax>
    </>
  )
}
