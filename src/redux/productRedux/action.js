import { api } from "../../apiConfig/apiConfig";
import { GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_BY_ID_FAILURE, GET_PRODUCT_BY_ID_REQUEST, GET_PRODUCT_BY_ID_SUCCESS } from "./constant";

export const getProducts =(reqData) =>async (dispatch) =>{
    dispatch({type: GET_ALL_PRODUCTS_REQUEST});
    const {category,colors,sizes,minPrice,maxPrice,minDiscount,sort,stock,pageNumber,pageSize} = reqData;

    try {
        const {data} = await api.get(`/api/products?category=${category}&colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        
        console.log("product Data",data);
        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload:data
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAILURE,
            payload:error.message
        });
    }
}

export const getProductById=(productId)=> async(dispatch)=>{
    dispatch({type: GET_PRODUCT_BY_ID_REQUEST});

    try {
        const {data} = await api.get(`/api/products/${productId}`);
        console.log("Product data by id",data);

        dispatch({
            type: GET_PRODUCT_BY_ID_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_BY_ID_FAILURE,
            payload: error.message
        });
    }
}