import axios from "axios";

import { api, API_BASE_URL } from "../../apiConfig/apiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./constant";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (data) => ({ type: REGISTER_SUCCESS, payload: data });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await api.post(`/auth/signup`, userData);
    const data = response.data;
    console.log(data);
    

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch(registerSuccess(data.jwt));
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await api.post(`/auth/signin`, userData);
    const data = response.data;
    console.log(data);
    

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch(getUserProfile());
      dispatch(loginSuccess(data.jwt));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem('jwt');
  dispatch(getUserRequest());
  try {
    const response = await api.get(`/api/users/profile`);
    const user = response.data;
    console.log(user);
    

    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = ()=>(dispatch)=>{
    dispatch({type: LOGOUT});
}