<script setup lang="ts">
import Echart from "@/components/Echart.vue"
import type { EChartsLineOption } from "@/utils/echarts/Echart"
import { getLineConfig } from "@/utils/echarts/Line"
import { getLinerGradientColor } from "@/utils/echarts/Color"

import { getPV } from "@/network/api"

import { formatTime, getLineDatas } from "@/utils/format";
import Card from "@/components/Card.vue"
import { findIndex } from "@/utils/utils"

let options: EChartsLineOption[]
const res = await getPV()
const resReactive = getLineDatas(res)

if (resReactive && resReactive.value) {
  options = resReactive.value.map((item) => {
    // console.log(item.labels)
    return getLineConfig({
      title: item.key,
      labels: formatTime(item.labels as unknown as number[]),
      color: getLinerGradientColor('rgb(128, 255, 165)', 'rgb(1, 191, 236)'),
      datas: (item.datas as unknown as number[])
    })
  })
}

const list = resReactive.value?.map((item) => {
  // item: 一个组的数据
  const i = findIndex(item.labels as number[], Date.now() - 1000 * 60 * 60 * 24)
  console.log(i)
  const data = item.datas.filter((item, index) => index >= i)
    .reduce((pre, cur) => pre + cur)

  return { url: item.key, data }
})

</script>

<template>
  <Card>
    <template #header>
      <h4>流量数据</h4>
    </template>
    <template #main>
      <div v-for="(item, index) in list" :key="index">
        <h5>浏览量</h5>
        <span
          style="display: inline-block; font-size: 2.5rem;color:var(--font-color); padding: 0.5rem 0;">{{item.data}}</span>
        <footer>
          <span>{{item.url}}</span>
        </footer>
      </div>
    </template>
  </Card>
  <div class="show-board">
    <template v-for="(option, index) in options" :key="index">
      <Echart :options="option" height="300px" width="400px"></Echart>
    </template>
  </div>

</template>

<style scoped>
.show-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>