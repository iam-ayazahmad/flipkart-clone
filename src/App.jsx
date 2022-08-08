import { useState,useEffect,React } from 'react'
import { Route, Routes } from 'react-router'

import './App.css'

import {Navbar} from "./Components/Navbar/Navbar"
import { Electronics } from './Pages/Electronics/Electronics'
import { Home } from './Pages/Home/Home'
import { Mobiles } from './Pages/Mobiles/Mobiles'

import { handleLoading, storeData ,getdata } from './Redux/Products/action'


import axios from "axios";


import {useDispatch} from "react-redux"
import { Oneproduct } from './Pages/OneProduct/OneProducts'
import { Cart } from './Pages/Cart/Cart'
import { Footer } from './Components/Footer/Footer'
import { Login } from './Pages/Login/Login'


function App() {

  let dispatch=useDispatch()

  

  useEffect(()=>{
    dispatch(getdata())
    dispatch(handleLoading())
  },[])
  
  
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/Electronics' element={<Electronics/>}></Route>
        <Route path='/Mobiles' element={<Mobiles/>}></Route>
        <Route path='/Mobiles/:id' element={<Oneproduct/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      <Login></Login>
      <Footer></Footer>
      
      
      
    </div>
  )
}

export default App
