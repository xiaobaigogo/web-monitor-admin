import { ref, Ref } from "vue";

export interface pointType {
  x: any
  y: any
}

export interface formatLineData {
  key: string
  labels: string[] | number[]
  datas: number[]
}

export interface formatPieData {
  key: string
  datas: Ref
}

export interface formatProgressData {
  value: number
  name: string
}

export function formatData(arr: pointType[]) {
  const ls = arr.map((item) => item.x)
  const ds = arr.map((item) => item.y)
  return { ls, ds }
}


export function formatTime(arr: number[]) {
  return arr.map((item) => {
    const date = new Date(item)
    return `${date.getDate()}日 ${('0' + date.getHours()).slice(-2)}时`
  })
}

/**
 * 响应式返回折线图组数据
 * @param res 请求结果
 * @param isFormatTime 格式化时间
 */
export function getLineDatas(res: any, isFormatTime: boolean = false) {
  const group = ref<formatLineData[]>()
  group.value = []

  // if (typeof fn !== 'function') return
  // const res = await fn()
  // console.log(res)

  for (let [key, points] of Object.entries(res)) {
    const { ls, ds } = formatData(points as pointType[])
    // console.log(ls, ds)
    const labels = isFormatTime === true ? formatTime(ls) : ls as number[]
    const datas = ds
    group.value.push({ key, labels, datas })
  }
  // console.log(group.value)
  return group
}

/**
 * 响应式返回饼图组数据
 * @param res 请求结果
 */
export function getPieDatas(res: any) {
  const group = ref<formatPieData[]>()
  group.value = []

  // if (typeof fn !== 'function') return
  // const res = await fn()
  // console.log(res)


  for (let [key, datas] of Object.entries(res)) {
    group.value.push({ key, datas: ref(datas) })
  }
  // console.log(group.value)
  return group
}


export function getProgressDatas(res: any) {
  const group = ref<formatProgressData[]>()
  group.value = []
  for (let [key, data] of Object.entries(res)) {
    group.value.push({ name: key, value: data as number })
  }
  // console.log(group.value)
  return group
}