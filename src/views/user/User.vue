<script setup lang="ts">
import Echart from "@/components/Echart.vue"

import { EChartsPieOption } from "@/utils/echarts/Echart";
import { getPieConfig } from "@/utils/echarts/Pie"
import { getLinerGradientColor } from "@/utils/echarts/Color"

import { getDevice } from "@/network/api"

import { getPieDatas } from "@/utils/format";

let options: EChartsPieOption[]
const res = await getDevice()
const resReactive = getPieDatas(res)

const map:Record<string,string> = {
  'deviceType': '用户使用的设备类型',
  'browseType': '用户使用的浏览器类型',
}

if (resReactive && resReactive.value) {
  options = resReactive.value.map((item) => {
    // console.log(item.labels)
    return getPieConfig({
      title: map[item.key],
      datas: (item.datas as unknown as number[]),
      color: '#646cff'
    })
  })

  // console.log(options)
}


</script>

<template>
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
</style>