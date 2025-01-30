import axios from 'axios';

import { Env } from '@/lib/Env';

import { getToken, removeToken } from '@/utils/token';

const api = axios.create({
  baseURL: Env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: {
    response: {
      status: number;
    };
  }) => {
    if (error?.response?.status === 401) {
      localStorage.clear();
      removeToken();
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

export default api;
