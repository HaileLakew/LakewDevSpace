import React from 'react'
import { useProgress, Html } from '@react-three/drei'

import { useBlock } from './Blocks'

function Plane({ color = 'white', map, ...props }) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} map={map} />
    </mesh>
  )
}

export function Content({ left, right, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  let alignmentSkew = 0
  if (left) {
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
  return <Plane scale={[100, 3, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#AAAAAA" />
}

export function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}
