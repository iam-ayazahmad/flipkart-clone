import { useState } from 'react'

import './App.css'
import { Catadiv } from './Components/CategoryMain/Catadiv'
import {Navbar} from "./Components/Navbar/Navbar"
import { Slider } from './Components/Slider/Slider'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Catadiv></Catadiv>
      <Slider></Slider>
    </div>
  )
}

export default App
