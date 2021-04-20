import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'

import { Block } from '../../Components/Blocks'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'
import Skill from './Parts/Skills'
import Timeline from './Parts/Timeline'
import PhotoGallery from './Parts/PhotoGallery'

import state from '../../Libraries/store'

export default function Portfolio(props) {
  const scrollArea = useRef()
  return (
    <>
      <Parallax ref={scrollArea} pages={3.6} >
          <ParallaxLayer offset={0} speed={.5}>
            <Canvas
            concurrent
            shadowMap
            camera={{ position: [0, 0, 5], fov: 70 }}>
                <Landing />
            </Canvas>
          </ParallaxLayer>

          <ParallaxLayer offset={1.25} speed={1}>
            <Introduction />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.25}>
            <Skill />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1}>
            <Timeline />
          </ParallaxLayer>

          <ParallaxLayer offset={3.5} speed={0.5}>
            <PhotoGallery />
          </ParallaxLayer>
        </Parallax>
    </>
  )
}
