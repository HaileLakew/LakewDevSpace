import React, { useRef, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'

import Gallery from "react-photo-gallery";
import { photos } from "./photo";

import { Block } from '../../Components/Blocks'

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
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
        <Block factor={1.5} offset={0}>
          <Landing />
        </Block>
      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: '110vh' }} />

        <Introduction />

        <Skill />

        <Timeline />

        <Gallery styles={{background: '#fff', margin: '10%'}}photos={photos} />
      </div>
    </>
  )
}
