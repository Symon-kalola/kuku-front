import axiosLib from 'axios';

const Axios = axiosLib.create({
  baseURL: 'http://192.168.43.141:8000/api',
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
});
export default Axios; 
