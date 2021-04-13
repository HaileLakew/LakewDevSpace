import React, { Suspense, useRef, useEffect } from "react"
import { Canvas, } from 'react-three-fiber'
import { Block, useBlock } from "./Blocks"

import {isMobile} from 'react-device-detect';

import { useProgress, Html } from '@react-three/drei'

import LandingPage from '../LandingPage'
import FloatingCube from '../FloatingCube'

import state from "./store"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}

function Plane({ color = "white", ...props }) {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function Content({ left, right, children }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2

  let alignmentSkew = 0;

  if(left) {
    alignmentSkew = -1
  } else if (right) {
    alignmentSkew = 1
  }

  return (
    <group position={[alignRight * alignmentSkew, 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" />
      {children}
    </group>
  )
}

function Stripe() {
  return (
    <Plane scale={[100, 3, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#AAAAAA" />
  )
}

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
            <Content left>
              <Html>
                <h1>Hello</h1>
              </Html>
            </Content>
          </Block>
  
          <Block factor={2.0} offset={isMobile ? 1.8 : 2.3}>
            <Content right/>
          </Block>
  
          <Block factor={2.0} offset={isMobile ? 2.4 : 3}>
            <Content />
          </Block>
  
          <Block factor={2.0} offset={isMobile ? 2 : 4}>
            <color attach="background" args={['#000']} />
            <Suspense fallback={<Loader />}>
              <FloatingCube />
            </Suspense>
            <ambientLight intensity={0.4} />
          </Block>
  
          <Block factor={2.0} offset={isMobile ? 3: 5}>
            <Content />
          </Block>
  
          <Block factor={-1.0} offset={3.4}>
            <Stripe />
          </Block>
  
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
      </>
    )
    }