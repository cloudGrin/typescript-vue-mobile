import { AxiosRequestConfig } from 'axios';
import { RouterOptions } from 'vue-router';

interface SelfAxiosRequestConfig extends AxiosRequestConfig {
  retry: number; // 超时再次请求次数
  retryDelay: number; // 超时后再次发起请求的时间间隔
}

// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG: RouterOptions = {
  mode: 'history',
  base: '/'
};

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG: SelfAxiosRequestConfig = {
  maxContentLength: 2000,
  headers: {},
  timeout: 20000,
  withCredentials: true,
  retry: 4,
  retryDelay: 1000,
};
