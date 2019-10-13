import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMatchHeights from "vue-match-heights";

Vue.use(VueMatchHeights, {
  disabled: [768] // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
