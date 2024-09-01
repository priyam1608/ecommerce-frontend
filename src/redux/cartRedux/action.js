import { api } from "../../apiConfig/apiConfig";
import {
  ADD_CART_ITEM_FAILURE,
  ADD_CART_ITEM_REQUEST,
  ADD_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILURE,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  GET_USER_CART_FAILURE,
  GET_USER_CART_REQUEST,
  GET_USER_CART_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./constant";

export const getUserCart = () => async (dispatch) => {
  dispatch({ type: GET_USER_CART_REQUEST });

  try {
    const { data } = await api.get("/api/cart/");
    console.log("Cart data", data);

    dispatch({
      type: GET_USER_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const addCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put("/api/cart/add-cart-items", reqData);
    console.log("ADDED Cart data", data);

    dispatch({
      type: ADD_CART_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: DELETE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(
      `/api/cart/cart-items/${cartItemId}/delete`
    );
    console.log("DELETED Cart data", data);

    dispatch({
      type: DELETE_CART_ITEM_SUCCESS,
      payload: cartItemId,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST }); // check update cart-item api by watching previous videos
  const { cartItemId } = reqData;
  const { data } = reqData;

  try {
    const { response } = await api.put(
      `/api/cart/cart-items/${cartItemId}/update`,data
    );
    console.log("UPDATED Cart data", response);

    dispatch({
      type: UPDATE_CART_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};
