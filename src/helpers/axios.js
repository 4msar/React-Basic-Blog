import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5dfa5e8538678a00145fa1ae.mockapi.io/app/',
  timeout: 50000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;