import axios from "axios"
import React from "react"



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



const getdata=()=>(dispatch)=>{
    
    dispatch(handleLoading())
    axios.get("http://localhost:8080/Mobiles").then(({data})=>{
      
      dispatch(storeData(data))
      dispatch(handleLoading())
        
    })
    
}

const storeSingleproduct=(payload)=>({
    type:"SINGLE_PRODUCT",
    payload:payload
})

const getSingledata=(id)=>(dispatch)=>{

    dispatch(handleLoading())
    axios.get(`http://localhost:8080/Mobiles/${id}`).then(({data})=>{
      
      dispatch(storeSingleproduct(data))
      dispatch(handleLoading(true))
     
    })
    
}




export {storeData, handleLoading, handleError, getdata, storeSingleproduct, getSingledata}