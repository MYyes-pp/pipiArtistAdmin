<template>
  <el-menu
  active-text-color="#ffd04b"
  background-color="#334155"
  class="h-full dark:shadow-orange-50 shadow-md"
  text-color="#e2e8f0"
  :collapse="isCollapse"
  >
  <el-scrollbar>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
  </el-scrollbar>
  </el-menu>
</template>

<script  setup>
import { computed } from "vue" 
import { useRouter } from "vue-router";

const props = defineProps({
  isCollapse:Boolean
})

const router = useRouter()
const routers = computed(()=>{
  return router.currentRoute.value.matched.filter(f=>f.meta?.title)
})


</script>

<style lang="scss" scoped>
  .el-menu{
    border-right: none;
  }
</style>