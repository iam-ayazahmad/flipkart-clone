import {legacy_createStore as createStore, applyMiddleware, combineReducers} from "redux"
import {ProductReducer} from "./Products/reducer"
import thunk from "redux-thunk"
import { cartReducer } from "./Cart/reducer"

const rootReducer = combineReducers({

    myproduct : ProductReducer,
    cart : cartReducer

})




const store = createStore(rootReducer,applyMiddleware(thunk))



export {store}








