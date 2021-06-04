import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export default function fetchOrders() {
  return axios(`${API_URL}/orders`);
}
