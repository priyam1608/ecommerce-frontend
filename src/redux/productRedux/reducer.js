import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_BY_ID_FAILURE, GET_PRODUCT_BY_ID_REQUEST, GET_PRODUCT_BY_ID_SUCCESS } from "./constant";

const initialState = {
    products:[],
    product: null,
    loading:false,
    error:null
}

export const productReducer = (state=initialState, action) =>{
    
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST :
        case GET_PRODUCT_BY_ID_REQUEST :
            return {...state, loading: true,error:null};
    
        case GET_ALL_PRODUCTS_SUCCESS:
            return {...state, loading: false,products:action.payload,error:null};

        case GET_PRODUCT_BY_ID_SUCCESS:
            return {...state, loading: false,product:action.payload,error:null};

        case GET_ALL_PRODUCTS_FAILURE:
        case GET_PRODUCT_BY_ID_FAILURE:
            return {...state, loading: false,error:action.payload}
            
        default:
            return state;
    }
}