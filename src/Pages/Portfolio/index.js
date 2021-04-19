import React, { useRef, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'

import Gallery from 'react-photo-gallery'
import { photos } from './photo'

import { Block } from '../../Components/Blocks'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'
import Skill from './Parts/Skills'
import Timeline from './Parts/Timeline'

import state from '../../Libraries/store'

export default function Portfolio(props) {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }} style={{height: `${100-state.top.current}vh`}}>
          <Block factor={1.5} offset={0}>
            <Landing />
          </Block>
        </Canvas>
        <Parallax ref={scrollArea} pages={3} scrolling={true}>
          <ParallaxLayer offset={0} speed={1}>
            <Introduction />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <Skill />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <Timeline />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.5}>
            <Gallery styles={{ background: '#fff', margin: '10%' }} photos={photos} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
