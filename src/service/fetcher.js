import axios from 'axios';

const apiUrl = '../assets';

export const getProducts = () => {
  const res = axios(apiUrl);
  return res;
};
