
<script setup lang="ts">
import { getBarConfig } from "@/utils/echarts/Bar"
import { getPerformance } from "@/network/api"


const { head, data } = await getPerformance()
console.log(head, data)
const { sources, x, y, isYC } = data



const option = getBarConfig(sources, x, y, isYC)

</script>


<template>
  <header>
    <div v-for="(headItem, index) in head" class="item">
      <h4>{{index}}</h4>
      <span>{{headItem}}</span>
    </div>
  </header>
  <section>
    <Echart :options="option" height="30rem" width="50rem"></Echart>
  </section>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-around;

  .item {
    box-shadow: var(--border-boxshadow);
    padding: 1rem;
    width: 10rem;
    box-sizing: border-box;
    border-radius: 1rem;
  }
}
section {
  display: flex;
  justify-content: center;
}
</style>