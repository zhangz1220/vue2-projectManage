import axios from 'axios'

const service = axios.create()

//设置请求之前拦截
service.interceptors.request.use(
    config => {
        console.log('请求之前拦截返回', config)
        return config;
    }
);
//设置请求之后拦截
service.interceptors.response.use(
    res => {
        console.log('请求之后拦截返回', res)
        return res
    }
);
export default service