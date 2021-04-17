import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { isMobile } from 'react-device-detect'
import { Html } from '@react-three/drei'

import { Block } from '../../Components/Blocks'

import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'

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
        <div style={{ height: `${state.pages * 60}vh` }} />
      </div>

      <Introduction />
    </>
  )
}
