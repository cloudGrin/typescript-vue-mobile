import Vue from 'vue';
import Router, { RouteConfig, Route } from 'vue-router';
import { ROUTER_DEFAULT_CONFIG } from '@/config/index';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

Vue.use(Router);

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration

const routes: RouteConfig[] = [{
  name: 'home',
  path: '/',
  component: () =>
    import(/* webpackChunkName: "home" */ '@/views/home/index.vue')
},
{
  path: '*',
  redirect: '/'
}];

// 注入默认配置和路由表
const routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes
});
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc);
routerInstance.afterEach(routerAfterEachFunc);

function routerBeforeEachFunc(to: Route, from: Route, next: any) {
  // 这里可以做页面拦截，也可以在这里面做权限处理
  NProgress.start();
  next();
}

function routerAfterEachFunc() {
  NProgress.done(); // finish progress bar
  // 跳转页面窗口置顶
  window.scroll(0, 0);
}

export default routerInstance;
