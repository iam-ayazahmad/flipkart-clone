import {legacy_createStore as createStore, applyMiddleware} from "redux"
import {ProductReducer} from "./Products/reducer"
import thunk from "redux-thunk"
import { persistStore,persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, ProductReducer)


const store = createStore(persistedReducer,applyMiddleware(thunk))

const persistor = persistStore(store)

export {store,persistor}








