import { render } from 'react-dom'
import React, { Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { useProgress, Html } from '@react-three/drei'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import LandingPage from './Pages/LandingPage/LandingPage'
import Introduction from './Pages/Introduction/Introduction'

import './index.scss'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}

function App(props) {
  const containerRef = useRef(null)
  return (
    <>
      <LocomotiveScrollProvider options={{ smooth: true }} watch={[]} containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <div data-scroll-section style={{ height: '100vh' }}>
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
              <color attach="background" args={['#000']} />
              <Suspense fallback={<Loader />}>
                <LandingPage />
              </Suspense>
              <ambientLight intensity={0.4} />
            </Canvas>
          </div>

          <Introduction />
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}

render(<App />, document.querySelector('#root'))
