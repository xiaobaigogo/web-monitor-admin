<script setup lang='ts'>
</script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.container {
  // padding: 2rem;
  box-shadow: var(--border-boxshadow);
  margin: 2rem;

  header {
    border-bottom: 1px solid var(--el-border-color);
    // box-shadow: var(--border-boxshadow) 
  }

  main {
    display: flex;
    justify-content: space-around;
  }
}
</style>
