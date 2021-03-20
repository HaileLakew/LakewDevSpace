import React from 'react'
import useLayers from '../Libraries/use-layers'

import { useFrame } from 'react-three-fiber'
import { Box} from '@react-three/drei'

export default function Mirror({ sideMaterial, reflectionMaterial, args, layers, ...props }) {
    const ref = useLayers(layers)
  
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.001
        ref.current.rotation.z += 0.01
      }
    })
  
    return (
      <Box
        {...props}
        ref={ref}
        args={args}
        material={[sideMaterial, sideMaterial, sideMaterial, sideMaterial, reflectionMaterial, reflectionMaterial]}
      />
    )
  }