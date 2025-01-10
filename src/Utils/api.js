import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.swapi.tech/api/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.status}`);
    } else {
      console.error('Network Error');
    }
    return Promise.reject(error);
  }
);

export const get = (url, params = {}) => {
  return api.get(url, { params });
};

export const post = (url, data = {}) => {
  return api.post(url, data);
};

export const put = (url, data = {}) => {
  return api.put(url, data);
};

export const del = (url, params = {}) => {
  return api.delete(url, { params });
};

export default api;
