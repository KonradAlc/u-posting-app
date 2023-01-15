import axios from "axios";

import store from "@/store";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
  __tokenRequired: true,
});

const publicClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
  __tokenRequired: false,
});

client.interceptors.request.use((config) => {
  if (config.__tokenRequired && config.headers) {
    const { access } = store.getState().auth;
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

export const ApiClient = {
  get(url, params, customConfigs) {
    const configs = { params, ...customConfigs };
    return client.get(url, configs);
  },
  post(url, data, customConfigs) {
    return client.post(url, data, customConfigs);
  },
  put(url, data, customConfigs) {
    return client.put(url, data, customConfigs);
  },
  patch(url, data, customConfigs) {
    return client.patch(url, data, customConfigs);
  },
  delete(url, customConfigs) {
    return client.delete(url, customConfigs);
  },
};

export const PublicApiClient = {
  get(url, params, customConfigs) {
    const configs = { params, ...customConfigs };
    return publicClient.get(url, configs);
  },
  post(url, data, customConfigs) {
    return publicClient.post(url, data, customConfigs);
  },
  put(url, data, customConfigs) {
    return publicClient.put(url, data, customConfigs);
  },
  patch(url, data, customConfigs) {
    return publicClient.patch(url, data, customConfigs);
  },
  delete(url, customConfigs) {
    return publicClient.delete(url, customConfigs);
  },
};

//export default ApiClient;
