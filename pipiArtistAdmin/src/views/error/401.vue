<template>
    <div class="flex justify-center items-center h-full flex-col">
      <img :src="errGif"/>
      <div class="text-2xl text-slate-600 mt-4 dark:text-slate-200">你没有权限去该页面</div>
      <div class="text-md text-sky-600 mt-4 cursor-pointer dark:text-sky-200 hover:scale-125">
        <RouterLink to="/dashboard">
          返回首页
        </RouterLink>
      </div>
    </div>
</template>

<script  setup>
import { RouterLink } from 'vue-router';
import errGif from '@/assets/img/401.gif'

</script>

<style lang="scss" scoped>

</style>