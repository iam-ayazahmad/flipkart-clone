import "../Mobiles/Mobiles.css"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
// import { oneProduct, storeData } from "../../Redux/Products/action"

import { Link } from "react-router-dom"
import { Cateline } from "../../Components/Cateline/Catadiv"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Checkbox } from "antd"

import {useSearchParams} from "react-router-dom"


export const Mobiles=()=>{

    const mydata=useSelector((state)=>state.myproduct.products)

    // const allloading=useSelector((state)=>state.myproduct.loading)
    // console.log(allloading)
    
    const navigate=useNavigate()
    const dispatch=useDispatch()






    const [searchParams,setSearchParams]=useSearchParams()

    const [catafil,setCatafil]=useState(
        searchParams.get("Brand")|| ""
    )
     console.log(searchParams)

 
    
    useEffect(()=>{
        if(catafil){
            setSearchParams({Brand:catafil},{replace:true})
        } 

    },[catafil,searchParams])

   

    return(
        <div>
            <Cateline></Cateline>
            {/* {allloading==false? <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="Loading..." />: */}
            <div  className="container">
                
                <div className="filterdiv"><h2>Filters</h2>
                
                <div>
                    <hr />
                    <label style={{color:"#2874f0"}}>Brand</label>
                    <select onChange={(e)=>setCatafil(e.target.value)} style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                        <option value="Mi">Mi</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        
                    </select>
                </div>
                <h1></h1>

                <div>
                    <hr />
                    <label style={{color:"#2874f0"}}>Ram</label>
                    <select   style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                    <option value="2GB">2GB</option>
                        <option value="4GB">4GB</option>
                        <option value="6GB">6GB</option>
                        <option value="8GB">8GB</option>
                    </select>
                </div>

                <div>
                    <hr />
                    <label style={{color:"#2874f0"}}>Price Range</label>
                    <select  style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                        <option value="1000" >Under 10,000</option>
                        <option value="20000">under 20,000</option>
                        <option value="100000">under 1,00,000</option>
                        <option value="500000">1,00,000 & above</option>

                    </select>
                </div>
                    
                
                <hr /></div>

                
                <div className="rightsupercontainer">
                    <div className="sortdivbox">
                        <span>sort by</span>
                        
                        <span>Price -- High to Low</span>
                        <span>Price -- Low to High</span>
                        
                        <span>Rating -- High to low</span>
                        <span>Rating -- Low to High</span>

                    </div>

                <div style={{paddingTop:"1%"}} className="datadiv">{mydata.map((e)=>{
                    return(
                        <div key={e.id}>
                          {/* <Link to={`/Mobiles/${e.id}`}>  */}
                        <div 
                        onClick={()=>
                            
                            navigate(`/Mobiles/${e.id}`)
                            } 
                        className="oneline">
                            
                            <div className="imgdiv"><img src={e.img[0]} alt="" /></div>
                            
                            <div className="datadiv">{e.title}<div style={{color:"gray",fontSize:"15px"}}><span className="ratetext">{e.rating}<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" /></span> 4.487,421 Ratings & 5,244 Reviews <span></span></div><ul><li>Expandable Upto 512 GB</li><li>16.59 cm (6.53 inch) HD+ Display</li><li>13MP + 2MP + 2MP | 5MP Front Camera</li><li>5000 mAh Lithium-ion Polymer Battery</li><li >MediaTek Helio G35 Processor</li><li>1 Year Warranty for Handset, 6 Months for Accessories</li></ul></div>
                            <div className="pricediv">
                                <div style={{display:"flex"}}><span  style={{fontSize:"26px"}}> ₹{Math.round(e.price-(e.price*10/100).toFixed(0))} </span><span><img style={{width:"70px",margin:"10px 0px 0px 10px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></span></div>
                                <h6 style={{marginTop:"1%"}}>Free Delivery</h6>
                                <h6 style={{marginTop:"-13%",color:"green"}}>Bank Offer</h6>

                            
                            
                            </div>
                        </div>
                        {/* </Link>  */}
                        <hr />
                        </div>
                    )
                })}</div>
                </div>
            </div>
            {/* } */}
        </div>
    )
}