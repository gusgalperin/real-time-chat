import Vue from "vue";
import VueChatScroll from "vue-chat-scroll";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.use(VueChatScroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
