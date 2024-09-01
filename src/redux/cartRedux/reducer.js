import { updateCartItem } from "./action";
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

const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_CART_REQUEST:
    case ADD_CART_ITEM_REQUEST:
    case DELETE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true ,error:null};

    case GET_USER_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems: action.payload.cartItems,
        error:null
      };

    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };

    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteCartItem: action.payload,
      };

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCartItem:action.payload,
      };

    case GET_USER_CART_FAILURE:
    case ADD_CART_ITEM_FAILURE:
    case DELETE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
