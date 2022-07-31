
// import { useSelector } from "react-redux"
import { Addbutton } from "../../Components/AddButton/Addbutton"
import { Buybutton } from "../../Components/Buybutton/Buybutton"
import { Cateline } from "../../Components/Cateline/Catadiv"



import "../OneProduct/OneProducts.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSingledata ,handleoneLoading} from "../../Redux/Products/action"
import { addToCart } from "../../Redux/Cart/action"


export const Oneproduct=()=>{

    const dispatch=useDispatch()

    const {id}=useParams()
    
    

    const oneload=useSelector((state)=>(state.myproduct.oneLoading))
    console.log(oneload)

    
   


    useEffect(()=>{
        if(id)
        {
            dispatch(getSingledata(id))
            dispatch(handleoneLoading())
     
            
        }
        
        
    },[id,dispatch])

    if(handleoneLoading==true)
    {
        
    }

    const initdata=useSelector((state)=>(state.myproduct.singleproduct))

    const cartdata=useSelector((state)=>(state.cart.cart))

    console.log(cartdata)

    
    
    function adddata(){
        dispatch(addToCart(initdata))
        console.log("ab")
    }
    

    

    

   



    
    return(
        <div>
        <Cateline></Cateline>
        {Object.keys(initdata).length!==0 & oneload==true ? 
        
         <div className="onemain">
            <div className="leftbox">
                <div className="verticalline">
                    
                   {initdata.img.map((elem)=>{
                    return(
                        <img className="smallimg" src={elem} alt="" srcset="" />
                    )
                   })}
                </div>
                    <div className="imgdivbox">
                        <img src={initdata.img[0]} alt="" /><div className="buttbox"><Addbutton data={"ADD TO CART"} addcart={adddata}/><Buybutton data={"BUY NOW"}/>
                    </div>
                </div>
            </div>




            <div className="rightbox">

                <div style={{color:"gray",fontSize:"12px"}}>home > Mobiles & Accessories > Mobiles</div>
                <div>{initdata.title}</div>
                <div style={{color:"gray",fontSize:"15px"}}><span className="ratetext">{initdata.rating} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" /></span> 4.487,421 Ratings & 5,244 Reviews <span><img style={{width:"70px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></span></div>
                <div className="pricedivone"><span>₹{Math.round(initdata.price-(initdata.price*10/100).toFixed(0))}</span><span>₹{initdata.price}</span><span>10%off</span></div>
                <h5>Available offers</h5>
                <div><span><img className="offertag"  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className="offerline">Bank Offer 5% Cashback on Flipkart Axis Bank Card <span className="tandc">T&C</span></span></div>
                <div><span><img className="offertag"  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className="offerline">Special PriceExtra ₹4000 off(price inclusive of discount) <span className="tandc">T&C</span></span></div>
                <div><span><img className="offertag"  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className="offerline">Freebie CoinDCX Get Bitcoin Worth ₹201 <span className="tandc">T&C</span></span></div>
                <div><span><img className="offertag"  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className="offerline">Get Google Nest hub at just ₹4999 <span className="tandc">T&C</span></span></div>

                <div></div>
            </div>
        </div>: <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="Loading..." />}
        
        </div>
    )

}