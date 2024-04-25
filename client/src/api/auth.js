import axios from 'axios';

const API = 'http://localhost:4000/api'; //la api del backend 

export const registerReq = (user) => axios.post(`${API}/register`, user)
export const loginReq = (user) => axios.post(`${API}/login`, user)