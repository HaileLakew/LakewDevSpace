import React, { Suspense} from "react"

import { Loader} from '../../../Components/Content'

import LandingPage from '../../../Components/LandingPage';

export default function Landing() {
    return (
        <>
            <color attach="background" args={['#000']} />
            <Suspense fallback={<Loader />}>
              <LandingPage />
            </Suspense>
            <ambientLight intensity={0.4} />
        </>
    )
}