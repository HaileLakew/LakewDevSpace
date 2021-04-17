import React, { Suspense, useRef, useState } from "react"
import { useProgress, Html } from '@react-three/drei'
import { Texture, TextureLoader, LinearFilter } from "three"

import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { useBlock } from "./Blocks"
import lerp from "lerp"
import state from '../Libraries/store'


import img1 from '../Assets/Img1.JPG'
import img2 from '../Assets/Img2.JPG'
import disp from '../Assets/displacement.jpg'

import  "../Libraries/CustomMaterial"

function Plane() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useLoader(TextureLoader, [img1, img2, disp])
  const [hovered, setHover] = useState(false)
  useFrame(() => (ref.current.dispFactor = lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.1)))
  return (
    <mesh onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)} scale={[3, 3, 1]}>
      <planeBufferGeometry attach="geometry" />
      <customMaterial ref={ref} attach="material" tex={texture1} tex2={texture2} disp={dispTexture} />
    </mesh>
  )
}

export function Content({ left, right, children, map}) {
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
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" map={map} />
      {children}
    </group>
  )
}
   
export function Stripe() {
    return (
      <Plane scale={[100, 3, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#AAAAAA" />
    )
  }
  
export function Loader() {
    const { progress } = useProgress()
    return (
      <Html center>
        <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
      </Html>
    )
  }