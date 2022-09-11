<script setup lang="ts">
import Nav from "@/components/Nav.vue"

</script>

<template>
  <header class="header">前端监控系统</header>
  <section class="view">
    <aside class="left">
      <Nav></Nav>
    </aside>
    <main class="right">
      <Suspense>
        <router-view></router-view>
      </Suspense>
    </main>
  </section>

</template>

<style lang="scss" scoped>
.header {
  border-radius: 1rem;
  box-shadow: var(--border-boxshadow);
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid var(--el-border-color);
}
.view {
  display: flex;
  border: 1px solid var(--el-border-color);
  border-radius: 1rem;
  // min-width: 90rem;
  margin: 0 auto;
  box-shadow: var(--border-boxshadow);

  .left {
    border-right: 1px solid var(--el-border-color);
    padding: 1rem 0;
  }

  .right {
    flex: 1;
    padding: 1rem 0;
    // flex-basis: 10rem;
  }
}
</style>