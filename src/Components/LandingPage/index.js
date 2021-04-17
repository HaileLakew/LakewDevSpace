import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useResource, useThree } from 'react-three-fiber'
import { Text, useMatcapTexture, Octahedron } from '@react-three/drei'

import useSlerp from '../../Libraries/use-slerp'; 
import useLayers from  '../../Libraries/use-layers';
import useRenderTarget from  '../../Libraries/use-render-target'; 

import { ThinFilmFresnelMap } from '../../Libraries/ThinFilmFresnelMap';
import { mirrorsData } from './data'

import Mirror from '../../Components/Mirror';

const TEXT_PROPS = {
  font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff'
}

function Title({ layers, ...props }) {
  const { size } = useThree()
  const mobile = size.width < 700
  const group = useRef()
  useEffect(() => {
    group.current.lookAt(0, 0, 0)
  }, [])

  const textRef = useLayers(layers)

  return (
    <group {...props} ref={group}>
      <Text
        ref={textRef}
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        fontSize={mobile ? 1 : 2.5}
        {...TEXT_PROPS}>
        Lakew
      </Text>
    </group>
  )
}

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

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(10)
    return y.vertices
  }, [])

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title name={'titleCopy-' + i} position={vertex} layers={layers} />
      ))}
    </group>
  )
}

function Scene() {
  const [cubeCamera, renderTarget] = useRenderTarget()
  const group = useSlerp()
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
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  )
}

export default Scene
