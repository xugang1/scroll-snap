import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'fullpage.js/dist/fullpage.css';
import 'fullpage.js/vendors/scrolloverflow.min.js';
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
