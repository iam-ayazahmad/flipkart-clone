import "../CategoryMain/Catadiv.css"

export const Catadiv=()=>{

    let mydata=[{text:"Top Offers",link:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"},{text:"Grocery",link:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"},{text:"Mobiles",link:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"},{text:"Fashion",link:"https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"},{text:"Electronics",link:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"},{text:"Home",link:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"},{text:"Appliances",link:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"},{text:"travel",link:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"},{text:"Beauty,Toys & More",link:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"}]
    return(
        <div className="main">
            {mydata.map((e)=>{
                return(
                    <div className="catamain">
                        <img src={e.link} alt="" />
                        <div>{e.text}</div>
                    </div>
                )
})}
        </div>
    )
}