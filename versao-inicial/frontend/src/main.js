import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

//TEMPORARIO!

require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwibmFtZSI6Imx1Y2FzIG1hdG9zIiwiZW1haWwiOiJsdWNhcy5tYXRvcy5pcHJAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY2MDQ4MjUzNCwiZXhwIjoxNjYwNzQxNzM0fQ.0s5DmyFAJ_k5zCAyrLAeqtXuwR_BDkxnUkjuSXFYSwU";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
