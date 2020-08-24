import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import { registerMicroApps, start } from 'qiankun';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:7101',
    container: '#container',
    activeRule: '/vue',
  },
]);
start();
