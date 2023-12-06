<template>
  <div class="w-full  h-[60px] flex items-center shadow-md dark:bg-slate-800">
    <a class="flex ml-2 cursor-pointer" href="https://github.com/MYyes-pp/pipiArtistAdmin/tree/main/pipiArtistAdmin" target="_blank">
      <div>
        <SvgIcon name="logo" height="2em" width="2em" v-if="!isDark"/>
        <SvgIcon name="logoDark" height="2em" width="2em" v-else/>
      </div>
      <div class="title text-lg font-medium text-slate-700 dark:text-slate-200">ArtistAdmin</div>
    </a>
    <div class="collapseIcon cursor-pointer" @click="()=>collapse=!collapse">
      <i-ep-expand  v-if="collapse" class="text-gray-700 text-[16px] ml-2  dark:text-slate-200" />
      <i-ep-fold v-else class="text-gray-700 text-[16px] ml-2  dark:text-slate-200" />
    </div>
    <div class="breadCrumbs flex-1"></div>
    <div class="operation w-1/5 flex items-center justify-around mx-2">
      <div class="search text-gray-500 text-[16px]  dark:text-slate-200">
        <i-ep-search/>
      </div>
      <div class="mode">
        <el-switch 
          v-model="mode"
          inline-prompt
          :active-icon="sun"
          :inactive-icon="moon"
          style="--el-switch-on-color: #cbd5e1; --el-switch-off-color:#1e293b"
          @click="toggleDark()"
        />
      </div>
      <div class="user flex">
        <span class="text-sky-900 text-sm mr-2  dark:text-slate-200">欢迎您：Admin</span>
        <el-dropdown trigger="click">
          <span><i-ep-user class=" text-gray-500 text-[16px]  dark:text-slate-200"/></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <SvgIcon name="logout" width="1.5em" height="1.5em"/>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useDark, useToggle } from '@vueuse/core'
import sun from './sun.vue'
import moon from './moon.vue'
import {getLocalStorage} from '@/utils/index.js'

const collapse = ref(false)
const isDark = useDark({      
  storageKey: 'useDarkKEY',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
const mode =ref(getLocalStorage('useDarkKEY')=='auto')

</script>
<style lang="scss" scoped>

</style>