import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//router
import VueRouter from "vue-router";
import Routes from "./Routes";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
