import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import http from "./network/index";
Vue.prototype.$http = http;

import "default-passive-events";

// 导入全局css
import "assets/style/reset.css";

// import ECharts from "vue-echarts";
// // 导入echarts配置
// import "./plugins/echarts.js";
// Vue.component("v-chart", ECharts);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 配置全局过滤器
import MyFilter from "@/common/filters";
for (let key in MyFilter) {
  Vue.filter(key, MyFilter[key]);
}
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
