import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import("@/views/scrollsnap/index")
    },
    {
      path: '/vuefullpage',
      component: () => import("@/views/vuefullpage/index")
    }
  ]
})