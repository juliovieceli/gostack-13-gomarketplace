import axios from 'axios';

const api = axios.create({
  baseURL: 'http://a357e8eea260.ngrok.io',
});

export default api;
