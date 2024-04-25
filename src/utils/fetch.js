import axios from "axios";
//创建axios实例
const service = axios.create({

  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, //打开cookie
  timeout: 50000, //请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  console.log('config.url===', config)
  return config
}, error => {

  Promise.reject(error)
})

//设置请求之后拦截
service.interceptors.response.use(
  res => {

    return res.data
  }
);


export default service



