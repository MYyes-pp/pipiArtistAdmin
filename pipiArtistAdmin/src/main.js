import './styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
// 引入组件
import SvgIcon from '@/components/SvgIcon.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Svg-icon', SvgIcon)

app.mount('#app')
