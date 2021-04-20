import { render } from 'react-dom'
import React from 'react'

import Portfolio from './Pages/Portfolio'
import state from './Libraries/store'

import './index.scss'

function App(props) {
  setTimeout(()=>{
    state.yeet();
  }, 2000)

  return (
    <>
      <Portfolio/>
    </>
  )
}

render(<App />, document.querySelector('#root'))
