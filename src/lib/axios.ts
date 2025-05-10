import axios from 'axios';

const API = axios.create({
  baseURL: 'https://oustkotek-backend.onrender.com/api/v1', 
  withCredentials: true,
});

export default API;
