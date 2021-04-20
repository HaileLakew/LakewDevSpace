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

export default function Portfolio(props) {
  const scrollArea = useRef()
  return (
    <>
      <Parallax ref={scrollArea} pages={4}>

        <ParallaxLayer offset={0} speed={-1.3}>
          <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
            <Spacer />
          </Canvas>
        </ParallaxLayer>

        <ParallaxLayer offset={-3.5} speed={-3}>
          <div class="polygon yeetBackground" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.5}>
          <div class="plane yeetBackground" />
        </ParallaxLayer>


        <ParallaxLayer offset={3} speed={1.55}>
          <div class="plane2"/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.55}>
          <ReactFloaterJs>          
            <div class=" plane3 yeet" />
          </ReactFloaterJs>
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

        <ParallaxLayer offset={2.45} speed={1.3}>
          <ReactFloaterJs>
            <Skill />
          </ReactFloaterJs>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1}>
            <Timeline />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
