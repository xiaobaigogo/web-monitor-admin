<script lang="ts" setup>
import echarts from "@/utils/echarts/Echart"
import type { EChartsOption } from "@/utils/echarts/Echart";

import { ref, onMounted } from "vue"

const props = defineProps<{ options: EChartsOption, width: string, height: string }>();
// console.log(props);

const chartDom = ref<HTMLElement | null>(null);


function render(targetElement: HTMLElement | null, options: EChartsOption) {
  if (targetElement !== null) {
    const chartDom = echarts.init(targetElement)
    options && chartDom.setOption(options)
  }
}

onMounted(() => {
  try {
    render(chartDom.value, props.options)
  } catch (error) {
    console.log(error)
  }

});

</script>

<template>
  <div ref="chartDom" :style="{ width:props.width, height:props.height }"></div>
</template>

<style scoped>

</style>