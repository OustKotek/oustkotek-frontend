import axios from 'axios';

const API = axios.create({
  baseURL: 'https://oustkotek-backend.vercel.app/api/v1', 
  withCredentials: true,
});

export default API;
