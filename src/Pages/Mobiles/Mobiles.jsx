import "../Mobiles/Mobiles.css"
import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"
// import { oneProduct, storeData } from "../../Redux/Products/action"

import { Link } from "react-router-dom"
import { Cateline } from "../../Components/Cateline/Catadiv"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"

export const Mobiles=()=>{

    const mydata=useSelector((state)=>state.myproduct.products)

    const para=useParams()
   

    const navigate=useNavigate()

    const dispatch=useDispatch()

    const [fil,setFil]=useState("")

  
    

    return(
        <div>
            <Cateline></Cateline>
            <div className="container">
                
                <div className="filterdiv"><h2>Filters</h2>
                
                <div>
                    <hr />
                    <label style={{color:"blue"}}>Brand</label>
                    <select onChange={(e)=>setFil(e.target.value)} style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                        <option value="Mi">Mi</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                </div>
                <h1></h1>

                <div>
                    <hr />
                    <label style={{color:"blue"}}>Ram</label>
                    <select style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                    <option value="2GB">2GB</option>
                        <option value="4GB">4GB</option>
                        <option value="6GB">6GB</option>
                        <option value="8GB">8GB</option>
                    </select>
                </div>

                <div>
                    <hr />
                    <label style={{color:"blue"}}>Price Range</label>
                    <select style={{padding: "10px", backgroundColor:"edf2ff", border:"none", width:"100%"}}>
                        <option value="1000" >Under 10,000</option>
                        <option value="20000">under 20,000</option>
                        <option value="100000">under 1,00,000</option>
                        <option value="500000">1,00,000 & above</option>

                    </select>
                </div>
                    
                
                <hr /></div>

                
                
                <div className="datadiv">{mydata.map((e)=>{
                    return(
                        <div>
                          {/* <Link to={`/Mobiles/${e.id}`}>  */}
                        <div 
                        onClick={()=>
                            
                            navigate(`/Mobiles/${e.id}`)
                            } 
                        className="oneline">
                            
                            <div className="imgdiv"><img src={e.img[0]} alt="" /></div>
                            
                            <div className="datadiv">{e.title}<div style={{color:"gray",fontSize:"15px"}}><span className="ratetext">4.4 <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" /></span> 4.487,421 Ratings & 5,244 Reviews <span></span></div><ul><li>Expandable Upto 512 GB</li><li>16.59 cm (6.53 inch) HD+ Display</li><li>13MP + 2MP + 2MP | 5MP Front Camera</li><li>5000 mAh Lithium-ion Polymer Battery</li><li >MediaTek Helio G35 Processor</li><li>1 Year Warranty for Handset, 6 Months for Accessories</li></ul></div>
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
    )
}