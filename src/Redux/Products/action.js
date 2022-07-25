import axios from "axios"
import React from "react"

// import { useDispatch } from "react-redux"
// const dispatch=useDispatch()


const handleLoading=()=>({
    type:"IS_LOADING",

})

const handleError=()=>({
    type:"IS_ERROR"
})

const storeData=(payload)=>({
    type:"STORE_DATA",
    payload:payload
})

const oneProduct=(payload)=>({
    type:"ONE_PRODUCT",
    payload:payload
})

const getdata=()=>(dispatch)=>{
    
    dispatch(handleLoading())
    axios.get("http://localhost:8080/Mobiles").then(({data})=>{
      
      dispatch(storeData(data))
      dispatch(handleLoading())
        
    })
    
}




export {storeData, handleLoading, handleError, getdata, oneProduct}