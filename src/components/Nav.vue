<template>
  <div class="menu">
    <el-menu :default-active="activeName" class="el-menu-vertical-demo" :collapse="isCollapse">
      <template v-for="(item, index) in data" :key="index">
        <el-menu-item :index="(item.name).toString()" @click="pushWithPath(item.path)">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{item.title}}</span>
        </el-menu-item>
      </template>
      <div class="collapse" @click="isCollapse = !isCollapse">
        <el-icon v-if="isCollapse">
          <DArrowRight />
        </el-icon>
        <el-icon v-else>
          <DArrowLeft />
        </el-icon>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  DArrowRight,
  DArrowLeft
} from "@element-plus/icons-vue";

import { useRouter } from "vue-router";

const router = useRouter()

let activeName = ref()

watch(router.currentRoute, () => {
  activeName.value = router.currentRoute.value.name
})

function pushWithPath(path: string) {
  router.push(path)
}

let isCollapse = ref(false);

const data = [
  {
    title: "概览",
    name: "home",
    icon: Document,
    path: "/home"
  },
  {
    title: "异常监控",
    name: "error",
    icon: IconMenu,
    path: "/error"
  },
  {
    title: "性能监控",
    icon: Location,
    name: "performance",
    path: "/performance"
  },
  {
    title: "用户监控",
    icon: Setting,
    name: "user",
    path: "/user"
  }
];
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 100vh;
}

.collapse {
  margin-top: 1rem;
  text-align: left;
  padding-left: 1.5rem;

  &:hover {
    cursor: pointer;
  }
}
</style>