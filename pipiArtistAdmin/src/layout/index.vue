<template>
  <div class="w-full h-full">
    <div class="header fixed top-0 left-0 right-0">
      <Header/>
    </div>
    <div class="mainWrapper bg-red fixed top-[60px] flex w-full h-full">
      <div class="sidebar">12</div>
      <div class="main flex-1 ">34</div>
    </div>
  </div>
</template>

<script  setup>
import Header from './header/index.vue'

</script>

<style lang="scss" scoped>

</style>