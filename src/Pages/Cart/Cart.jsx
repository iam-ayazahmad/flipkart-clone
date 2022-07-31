import "../Cart/Cart.css"

import {useDispatch,useSelector} from "react-redux"

import {Buybutton} from "../../Components/Buybutton/Buybutton"

import { DecrementQty, IncrementQty, RemoveFromCart } from "../../Redux/Cart/action"

export const Cart=()=>{

    const dispatch=useDispatch()

    
    const Mycartdata=useSelector((state)=>(state.cart.cart))
    console.log(Mycartdata)

    let totalprice=0

    let cartcount=0
    for(var i=0; i<Mycartdata.length; i++)
    {
        totalprice+=(Mycartdata[i].price)*Mycartdata[i].qty

        cartcount+=Mycartdata[i].qty

        
    }

    const decQty=(id)=>{

        dispatch(DecrementQty({id}))

        let fnitem=0
        for(var i=0; i<Mycartdata.length; i++)
        {
            if(Mycartdata[i].id==id)
            {
                fnitem=Mycartdata[i].qty
            }
        }

        if(fnitem==1)
        {
            dispatch(RemoveFromCart({id}))
        }
        
    }
    const incQty=(id)=>{

        dispatch(IncrementQty({id}))

    }

    const Rmbitem=(id)=>{
        dispatch(RemoveFromCart({id}))
    }

    



    
    return(
        <div className="cartmain">

            <div className="subcartmain">

                <div className="leftcartbox">
                    <div className="flipkartwithcartcount">  {cartcount>0? <span>Flipkart ({cartcount})</span>:<span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AZ826hsut4_Te3sWXtIm7EfzDi-3xKLpyA&usqp=CAU" alt="" /></span>} </div>
                    {cartcount>0?<div>{Mycartdata.map((e)=>{
                        return(
                            <div style={{borderBottom:"1px solid rgba(191, 191, 191, 0.651)"}}>
                            <div className="showdatamain">
                                
                                <div className="leftdetail"><img src={e.img[0]} alt="" /></div>
                                <div className="rightdetail">
                                    <div>{e.title}</div>
                                    <div style={{color:"gray",fontSize:"12px"}}>{e.ram} RAM</div>
                                    <div className="priceline"><span style={{textDecoration:"line-through",color:"gray",fontSize:"12px"}}>₹{e.price}</span><span><strong style={{display:"inline-block",fontSize:"20px"}}>₹{Math.round(e.price-(e.price*10/100).toFixed(0))}</strong> </span><span style={{color:"green"}}>10%off</span></div>
                                    <div><span style={{color:"gray",fontSize:"12px"}}>Seller: Flipkart </span><img style={{width:"40px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></div>
                                </div>
                                <img onClick={()=>Rmbitem(e.id)} className="removeitem" src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" alt="" />
                                
                            </div>
                            <div className="cartcountbox"><button onClick={()=>decQty(e.id)}>-</button><span>{e.qty}</span><button onClick={()=>incQty(e.id)}>+</button></div>
                            
                           
                            </div>
                            

                        )
                    })}</div>:null}
                    <div className="placebuttondiv">{cartcount>0?<Buybutton data={"Place Order"}></Buybutton>:null}</div> 

                    
                    
                </div>
                {
                    cartcount>0?<div className="rightcartbox">
                    <div className="pricetext">PRICE DETAILS</div>
                    <div><span>Price ({cartcount} items) </span><span>₹{totalprice}</span></div>
                    <div><span>Discount</span><span className="greentext">-₹{Math.round((totalprice*10)/100).toFixed(0)}</span></div>
                    <div><span>Delivery Charges</span><span className="greentext">FREE</span></div>
                    <div><span>Total Amount</span><span>₹{totalprice-Math.round((totalprice*10)/100).toFixed(0)}</span></div>
                    <div>You will save ₹{Math.round((totalprice*10)/100).toFixed(0)} on this order</div>
                </div>:null
                    
                }
                

            </div>
            
            
            
            
        </div>
    )
}