import axios from 'axios';
import {CONFIGS} from 'appConstants';
import store from 'stores';

const defaultOptions = {
  baseURL: CONFIGS.API_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(request => {
  const token = store && store.getState().auth.userInfo;
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }
  return request;
});

instance.interceptors.response.use(
  response => {
    if (
      CONFIGS.URL_API_NO_NEED_REFRESH.includes(response.config.url) &&
      response.data.code !== 1000
    ) {
      return Promise.reject(response.data ? response.data : response);
    }

    if (response.data.code === 401) {
      const state = store && store.getState().auth;
      const {token} = state.login;

      if (token?.refreshToken) {
        // dispatch action get new token
        // and call request again
      }
    }

    if (!response.data?.data && response.data.code !== 1000) {
      return Promise.reject(response.data);
    }

    return response;
  },

  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    if (error.request) {
      console.log('No response, error request:', error.request);
    } else {
      console.log('Axios error:', error.message);
    }
    return Promise.reject(error);
  },
);
