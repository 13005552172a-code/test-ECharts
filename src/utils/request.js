import axios from 'axios'

const request=axios.create({
  baseURL:'http://127.0.0.1:3333/'
})
// 添加请求拦截器
request.interceptors.request.use(
  config=>config
  );

// 添加响应拦截器
request.interceptors.response.use(
  res=>res,
  err=>Promise.reject(err)

);
export default request