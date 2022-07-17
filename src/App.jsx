import { useState } from 'react'

import './App.css'
import {Navbar} from "./Components/Navbar/Navbar"
import { Slider } from './Components/Slider/Slider'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  )
}

export default App
