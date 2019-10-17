import 'babel-polyfill'; // 引入垫片
import Vue from 'vue';
import VuePageStack from 'vue-page-stack';
import FastClick from 'fastclick';
import 'normalize.css';

import initMockService from '@/mocks';
import Directives from '@/directives';
import '@/plugins/icons';
import '@/plugins/sentry';
import router from '@/router';
import store from '@/store';

import App from './App.vue';

import LocalConfig from '@/config.json';

// 可作为全局通信的载体,用于非父子关系的组件间的通信上，常见的业务一般都可以用vuex替代
window.$vbus = new Vue();

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  });
}

if (LocalConfig.MockEnabled) {
  initMockService();
}

Vue.config.productionTip = false;

Vue.use(Directives);

if (LocalConfig.VuePageStackEnabled) {
  Vue.use(VuePageStack, { router });
}

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    if (LocalConfig.PreRenderEnabled) {
      // 触发 renderAfterDocumentEvent
      document.dispatchEvent(new Event('render-event'));
    }
  }
}).$mount('#app');
