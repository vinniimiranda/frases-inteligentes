import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://smart-phrases.herokuapp.com/'
});
