import axios from "axios"
import type { AxiosInstance } from "axios";
import { myRequestInterceptors, myRequestConfig, Method } from "./type"


export class Request {
  private instance: AxiosInstance
  private interceptors?: myRequestInterceptors

  constructor(config: myRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 实例对应的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 全局对应的拦截
    this.instance.interceptors.request.use((config) => {
      return config
    }, (error) => {
      return error
    })
    this.instance.interceptors.response.use((res) => {
      // 拦截失败信息
      const data = res.data
      if (data.success === false) {
        console.log('响应失败')
      } else {
        return data
      }

    }, (error) => {
      console.log('响应失败')
      return error
    })
  }

  request<T = any>(config: myRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独请求对应的拦截
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        // console.log(res)
        resolve(res)
      }).catch((error) => {
        reject(error)
        return error
      })
    })
  }

  get<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: Method.GET })
  }

  post<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: Method.POST })
  }

  delete<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: Method.DELETE })
  }

  patch<T = any>(config: myRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: Method.PATCH })
  }
}