const initState={
    loading:false,
    error:false,
    products:[],
    oneproduct:[],
    
}


const ProductReducer=(state=initState,action)=>{
    switch(action.type){

        case "IS_LOADING" :
            return {...state,loading:true}

        case "IS_ERROR":
            return {...state,loading:true}

        case "STORE_DATA":
            return {...state,loading:false,error:false,products:action.payload}

        case "ONE_PRODUCT":
            return {...state,oneproduct:action.payload}

        default:
            return state
    }

}

export {ProductReducer}