import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://waiterapp-api-bryanvck.onrender.com',
});
