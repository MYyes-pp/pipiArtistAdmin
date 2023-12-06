<template>
  <div class="w-full h-full">
    <div class="header fixed top-0 left-0 right-0">
      <Header @changeCollapse="changeCollapse"/>
    </div>
    <div class="mainWrapper bg-red fixed top-[60px] flex w-full h-full">
      <div class="sidebar h-full">
        <Sidebar :isCollapse="isCollapse"/>
      </div>
      <div class="main flex-1 px-4 py-4 dark:bg-slate-700 dark:text-slate-200 ">34</div>
    </div>
  </div>
</template>

<script  setup>
import {ref} from 'vue'
import Header from './header/index.vue'
import Sidebar from './sidebar/index.vue'

const isCollapse = ref(false)

const changeCollapse = ()=>{
  isCollapse.value = !isCollapse.value
}

</script>

<style lang="scss" scoped>

</style>