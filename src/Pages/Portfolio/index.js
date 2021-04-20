import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'
import ReactFloaterJs from 'react-floaterjs'

import Spacer from './Parts/Spacer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'
import Skill from './Parts/Skills'
import Timeline from './Parts/Timeline'
import PhotoGallery from './Parts/PhotoGallery'

export default function Portfolio(props) {
  const scrollArea = useRef()
  return (
    <>
      <Parallax ref={scrollArea} pages={4}>
        <ParallaxLayer offset={0} speed={-1.5}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Spacer />
          </Canvas>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Landing />
          </Canvas>
        </ParallaxLayer>

        <ParallaxLayer offset={1.25} speed={1}>
          <ReactFloaterJs>
            <Introduction />
          </ReactFloaterJs>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.25}>
          <ReactFloaterJs>
            <Skill />
          </ReactFloaterJs>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1}>
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}>
          <ReactFloaterJs>
            <PhotoGallery />
          </ReactFloaterJs>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
