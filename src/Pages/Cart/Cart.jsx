import "../Cart/Cart.css"

import {useDispatch,useSelector} from "react-redux"

export const Cart=()=>{

    
    const Mycartdata=useSelector((state)=>(state.cart.cart))
    console.log(Mycartdata)

    



    
    return(
        <div className="cartmain">

            <div className="subcartmain">

                <div className="leftcartbox">
                    <div> Flipkart {Mycartdata.length>0? <span>({Mycartdata.length})</span>:null} </div>
                    <div>{Mycartdata.map((e)=>{
                        return(
                            <div>
                            <div className="showdatamain">
                                <div className="leftdetail"><img src={e.img[0]} alt="" /></div>
                                <div className="rightdetail">
                                    <div>{e.title}</div>
                                    <div style={{color:"gray",fontSize:"12px"}}>{e.ram} RAM</div>
                                    <div className="priceline"><span style={{textDecoration:"line-through",color:"gray",fontSize:"12px"}}>₹{e.price}</span><span><strong style={{display:"inline-block",fontSize:"20px"}}>₹{Math.round(e.price-(e.price*10/100).toFixed(0))}</strong> </span><span style={{color:"green"}}>10%off</span></div>
                                </div>
                                
                            </div>
                            <hr />
                            </div>

                        )
                    })}</div>
                </div>
                <div className="rightcartbox"></div>

            </div>
            
        </div>
    )
}