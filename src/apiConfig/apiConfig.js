import axios from "axios";

export const API_BASE_URL = 'http://localhost:8081';
export const API_RAILWAY_URL= 'https://ecommerce-backend-production-3930.up.railway.app/'
const jwt = localStorage.getItem('jwt');

export const api = axios.create({
    baseURL:API_RAILWAY_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})