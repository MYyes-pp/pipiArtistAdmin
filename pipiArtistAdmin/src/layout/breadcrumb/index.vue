<template>
  <el-breadcrumb separator="/">
   <el-breadcrumb-item v-for="item in routers" :key="item.path" :to="{path:item?.path}" >
    <div class="dark:text-slate-200">{{ item ?.meta?.title }}</div>
  </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from "vue" 
import { useRouter } from "vue-router";

const router = useRouter()
const routers = computed(()=>{
  return router.currentRoute.value.matched.filter(f=>f.meta?.title)
})
</script>

<style lang="scss" scoped>

</style>