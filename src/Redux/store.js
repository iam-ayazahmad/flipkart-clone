import {legacy_createStore as createStore, applyMiddleware} from "redux"
import {ProductReducer} from "./Products/reducer"
import thunk from "redux-thunk"




const store = createStore(ProductReducer,applyMiddleware(thunk))



export {store}








