import React, { Suspense, useRef, useEffect } from "react"
import { Canvas} from 'react-three-fiber'
import { Block } from "../../Components/Blocks"
import {isMobile} from 'react-device-detect';

import { Html } from '@react-three/drei'

import {Content, Stripe, Loader} from '../../Components/Content'

import LandingPage from '../LandingPage'
import FloatingCube from '../FloatingCube'

import state from "../../Libraries/store"

export default function App(props) {
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
      <>
        <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
  
          <Block factor={1.5} offset={0}>
            <color attach="background" args={['#000']} />
            <Suspense fallback={<Loader />}>
              <LandingPage />
            </Suspense>
            <ambientLight intensity={0.4} />
          </Block>
  
          <Block factor={1.5} offset={isMobile ? 1.2 : 1.5}>
            <Html>
                <h1>Hello</h1>
            </Html>
          </Block>
  
          <Block factor={1} offset={isMobile ? 1.8 : 2.3}>
            <Content left>
            <Html left>
                <h1>Hello</h1>
            </Html>
              </Content>
          </Block>
  
          <Block factor={1} offset={isMobile ? 2.4 : 3.5}>
            <Content />
          </Block>
  
          <Block factor={3} offset={isMobile ? 2 : 4.5}>
            <color attach="background" args={['#000']} />
            <Suspense fallback={<Loader />}>
              <FloatingCube />
            </Suspense>
            <ambientLight intensity={0.4} />
          </Block>
  
          <Block factor={1} offset={isMobile ? 3: 6}>
            <Content />
          </Block>
  
          <Block factor={-2} offset={3.4}>
            <Stripe />
          </Block>
          <Block factor={-2} offset={2}>
            <Stripe />
          </Block>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
        <div>
          <h1>YEEEET</h1>
        </div>
      </>
    )
    }