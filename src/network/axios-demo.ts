import { request } from "@/network";

request.get({
  url: '/home/multidata',
  // url: '/query_pv',
  interceptors: {
    responseInterceptors: (data) => {
      console.log('单独请求响应成功的拦截')
      return data
    }
  }
}).then((res) => console.log(res))