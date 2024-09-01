import { api } from "../../apiConfig/apiConfig";
import { CREATE_ORDER_SUCCESS } from "../orderRedux/constant";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./constant"

export const createPayment = (orderId) =>async (dispatch) =>{
    dispatch({type: CREATE_PAYMENT_REQUEST});

    try {
        const {data} = await api.post(`/api/payments/${orderId}`,{})

        if(data.payment_link_url){
            window.location.href = data.payment_link_url;
        }

        console.log("create payment data : ",data);
        
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type: CREATE_PAYMENT_FAILURE,payload:error.message});
    }
}

export const updateOrderStatus = (reqdata) =>async (dispatch) =>{
    dispatch({type: UPDATE_ORDER_STATUS_REQUEST});

    try {
        const {data} = await api.get(`/api/payments?payment_id=${reqdata.paymentId}&order_id=${reqdata.orderId}`)

        console.log("Updated Order - "+ data);
        
        dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type: UPDATE_ORDER_STATUS_FAILURE,payload:error.message});
    }
}