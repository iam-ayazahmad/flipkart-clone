import { ADD_TO_CART } from "./actionTypes";

const cartinitstate={
    cart:[]
}

const cartReducer=(state=cartinitstate,action)=>{
    const {type,payload} = action

    switch(type){
        case ADD_TO_CART :
            return{...state,cart:[...state.cart, payload]}
 
        default:
            return state
    }
}

export {cartReducer}