import Vue from 'vue';
import IconSvg from '@/components/Icon-svg.vue'; // svg组件
// register globally

Vue.component('icon-svg', IconSvg);

const modulesContext = require.context('../assets/icons', false, /\.svg$/);
modulesContext.keys().forEach(modulesContext);
