import React, { useState } from 'react'
import * as THREE from 'three'
import { useResource } from 'react-three-fiber'
import { useMatcapTexture, Octahedron } from '@react-three/drei'

import useSlerp from '../../Libraries/use-slerp'; 
import useRenderTarget from  '../../Libraries/use-render-target'; 

import { ThinFilmFresnelMap } from '../../Libraries/ThinFilmFresnelMap';
import { mirrorsData } from './data'

import Mirror from '../../Components/Mirror';

function Mirrors({ envMap, layers, ...props }) {
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap())
  const sideMaterial = useResource()
  const reflectionMaterial = useResource()

  return (
    <group name="mirrors" {...props}>
      <meshLambertMaterial ref={sideMaterial} map={thinFilmFresnelMap} color="#AAAAAA" />
      <meshLambertMaterial ref={reflectionMaterial} map={thinFilmFresnelMap} envMap={envMap} color="#FFFFFF" />
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          {...mirror}
          name={`mirror-${index}`}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </group>
  )
}

function Scene() {
  const [cubeCamera, renderTarget] = useRenderTarget()
  const group = useSlerp()
  // const scrollArea = useRef()
  // const onScroll = (e) => (createRef().current = e.target.scrollTop)
  // useEffect(() => void onScroll({ target: scrollArea.current }), [])
  const [matcapTexture] = useMatcapTexture('C8D1DC_575B62_818892_6E747B')

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron layers={[11]} name="background" args={[20, 4, 4]} position={[0, 0, -5]}>
          <meshMatcapMaterial matcap={matcapTexture} side={THREE.BackSide} transparent opacity={0.3} color="#FFFFFF" />
        </Octahedron>
        <cubeCamera
          layers={[11]}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  )
}

export default Scene
