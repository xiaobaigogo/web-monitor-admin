<script setup lang="ts">
import { getGaugeConfig } from "@/utils/echarts/Gauge"
import { getLineConfig } from "@/utils/echarts/Line"
import { getProgressDatas, getLineDatas } from "@/utils/format"
import { getError } from "@/network/api"
import { getLinerGradientColor } from "@/utils/echarts/Color"
import Echart from "@/components/Echart.vue"


const res = await getError()
const proReactive = getProgressDatas(res.possibility)
const proOptions = proReactive.value?.map((item, index) => {
  if (index == 0) {
    return {
      option: getGaugeConfig(item, false),
      width: '10rem',
      height: '10rem'
    }
  } else {
    return {
      option: getGaugeConfig(item),
      width: '8rem',
      height: '8rem'
    }
  }
})

// const proReactive = getProgressDatas(res.possibility)
const map:Record<string,string> = {
  'js-error': 'js异常',
  'resources-error': '静态资源加载异常',
  'interface-error': '接口异常',
  'healthy': '健康状况'
}

const detReactive = getLineDatas(res.error, true)
const detOptions = detReactive.value?.map((item) => {
  return getLineConfig({
    title: map[item.key],
    labels: (item.labels as unknown as string[]),
    color: getLinerGradientColor('rgb(128, 255, 165)', 'rgb(1, 191, 236)'),
    datas: (item.datas as unknown as number[])
  })
})

</script>

<template>
  <div>
    <div class="possibility">
      <template v-for="(option, index) in proOptions" :key="index">
        <Echart :options="option.option" :height="option.height" :width="option.width"></Echart>
      </template>
    </div>
    <div class="detail">
      <template v-for="(option, index) in detOptions" :key="index">
        <Echart :options="option" height="300px" width="400px"></Echart>
      </template>
    </div>
  </div>
</template>

<style scoped>
.possibility {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
}

.detail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>