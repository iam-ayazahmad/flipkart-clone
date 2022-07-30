const initState={
    loading:false,
    error:false,
    singleproduct:{},
    products:[],
    oneLoading:false
    
    
}


const ProductReducer=(state=initState,action)=>{
    switch(action.type){

        case "IS_LOADING" :
            return {...state,loading:true}

        case "IS_ERROR":
            return {...state,error:true}

        case "IS_ONELOADING":
            return {...state,oneLoading:true}

        case "STORE_DATA":
            return {...state,loading:false,error:false,products:action.payload}

        case "SINGLE_PRODUCT":
            return {...state,loading:false,error:false,singleproduct:action.payload}

        default:
            return state
    }

}

export {ProductReducer}
