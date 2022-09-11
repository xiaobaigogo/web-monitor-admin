import { request } from "@/network";

import { pointType } from '@/utils/format'

export async function getPV() {
  const res = await request.get({
    url: '/query_pv',
    interceptors: {
      responseInterceptors: (data) => {
        console.log('单独请求响应成功的拦截')
        return data
      }
    }
  })
  // console.log(res)
  return res
}

export async function getPerformance() {
  const res = await request.get({
    url: '/performance'
  })
  // console.log(res)
  return res
}

export async function getDevice() {
  const res = await request.get({
    url: '/device'
  })
  // console.log(res)
  return res
}

export async function getError() {
  const res = await request.get({
    url: '/error'
  })
  // console.log(res)
  return res
}