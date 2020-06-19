import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://172.31.77.213:3333' : 'https://smart-phrases.herokuapp.com/'
});
