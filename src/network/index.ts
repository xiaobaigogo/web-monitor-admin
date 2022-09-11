import { Request } from "./http"
import { BASE_URL, TIME_OUT } from "./httpconfig";


export const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorsCatch: (error) => {
      console.log(error)
      return error
    },
    responseInterceptors: (config) => {
      console.log('响应成功的拦截')
      return config
    },
    responseInterceptorsCatch: (error) => {
      console.log('响应失败的拦截')
      return error
    }
  }
})
