import { render } from 'react-dom'
import React from 'react'

import Portfolio from './Pages/Portfolio'

import './index.scss'

function App(props) {
  return (
    <>
      <Portfolio/>
    </>
  )
}

render(<App />, document.querySelector('#root'))
