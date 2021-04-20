import React, { Suspense } from 'react'

import { Loader } from '../../../Components/Content'

import FloatingCube from '../../../Components/FloatingCube'

export default function Landing() {
  return (
    <>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>
        <FloatingCube />
      </Suspense>
      <ambientLight intensity={0.4} />
    </>
  )
}
