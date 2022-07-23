import { useState } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'

import {Navbar} from "./Components/Navbar/Navbar"
import { Electronics } from './Pages/Electronics/Electronics'
import { Home } from './Pages/Home/Home'





function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/Electronics' element={<Electronics/>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      
      
      
    </div>
  )
}

export default App
