import React, { Suspense, useRef, useEffect } from "react"
import { Canvas} from 'react-three-fiber'
import {isMobile} from 'react-device-detect';
import { Html } from '@react-three/drei'

import {Content, Stripe, Loader} from '../../Components/Content'
import FloatingCube from '../../Components/FloatingCube'
import { Block } from "../../Components/Blocks"

import Landing from './Parts/Landing'
import Introduction from './Parts/Introduction'

import state from "../../Libraries/store"


const scrollConfig = {
  landing: {
    offset:0,
    factor:1.5
  },
  introduction: {
    offset:isMobile ? 1.2 : 1.5,
    factor: 1.5
  }
}

export default function Portfolio(props) {
    const scrollArea = useRef()
    const onScroll = (e) => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
      <>
        <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
  
          <Block factor={scrollConfig.landing.factor} offset={0}>
              <Landing/>
          </Block>
  
          <Block factor={scrollConfig.introduction.factor} offset={scrollConfig.introduction.offset}>
              {/* <Content/> */}
              <Introduction/>
          </Block>
  
          <Block factor={1} offset={10}>
            <Content left>
            <Html left>
                <h1>Hello</h1>
            </Html>
              </Content>
          </Block>
  
          <Block factor={1} offset={10}>
            <Content />
          </Block>
  
          <Block factor={3} offset={10}>
            <color attach="background" args={['#000']} />
            <Suspense fallback={<Loader />}>
              <FloatingCube />
            </Suspense>
            <ambientLight intensity={0.4} />
          </Block>
  
          <Block factor={1} offset={10}>
            <Content />
          </Block>
  
          <Block factor={-2} offset={10}>
            <Stripe />
          </Block>
          <Block factor={-2} offset={10}>
            <Stripe />
          </Block>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
      </>
    )
    }