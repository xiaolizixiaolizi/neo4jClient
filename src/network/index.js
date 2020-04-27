import axios from "axios";
import { Loading } from "element-ui";

let baseURL = "";
let baseURLArr = [
  { type: "development", url: "http://localhost:4000/" },
  { type: "production", url: "http://47.96.137.151:4000/" }
];
baseURLArr.forEach(e => {
  if (e.type === process.env.NODE_ENV) {
    baseURL = e.url;
  }
});
var instance = axios.create({
  baseURL: baseURL,
  timeout: 1000*20
});
let loading;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/json';
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 配置进度条
    loading = Loading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = token;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // 关闭进度条
    loading.close();
    return response.data;
  },
  error => {
    // 对响应错误做点什么
   // error是拿不到任何的错误信息。error.response才是拿到错误信息.
    loading.close();   
    return Promise.reject(error.response.data);
  }
);

class Request {
  // params拼在url查询字符串中
  get(url, params = {}) {
    return instance.get(url, {
      params
    });
  }
  post(url, params = {}) {
    return instance.post(url, JSON.stringify(params))
  }
  put(url, params = {}) {
    return instance.put(url, {
      params
    });
  }
  delete(url, params = {}) {
    return instance.delete(url, {
      params
    });
  }
}
export default new Request();
