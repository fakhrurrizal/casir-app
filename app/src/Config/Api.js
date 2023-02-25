import axios from 'axios'

export const API = axios.create({ baseURL:"http://localhost:8000/api" })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
