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
    axios.get("https://flipdata.herokuapp.com/Mobiles").then(({data})=>{
      
      dispatch(storeData(data))
      dispatch(handleLoading())
        
    })
    
}




const storeSingleproduct=(payload)=>({
    type:"SINGLE_PRODUCT",
    payload:payload
})

const handleoneLoading=()=>({
    type:"IS_ONELOADING",

})
const getSingledata=(id)=>(dispatch)=>{

    
    axios.get(`https://flipdata.herokuapp.com/Mobiles/${id}`).then(({data})=>{
      
      dispatch(storeSingleproduct(data))
      
    })
    
}





export {storeData, handleLoading, handleError, getdata, storeSingleproduct, getSingledata, handleoneLoading}