import "../AddButton/Addbutton.css"

export const Addbutton=({data,addcart})=>{
    return(
        <div>
            <button onClick={()=>{addcart()}} className="addstyle" >{data}</button>
        </div>
    )
}