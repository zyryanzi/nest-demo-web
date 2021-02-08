import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {AppConfig} from "@/config/app"
import {loadAllPlugins} from '@/plugins'
import {registeGlobalComponent} from "@/components/index";

// Cookies
import Cookies from 'js-cookie'
// 语言国际化
import '@/i18n/index'
// ant-design
import Antd from 'ant-design-vue';
// import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.less'
// svg资源加载
import '@/icons'

import 'vue-easytable/libs/theme-default/index.css'

const app: ReturnType<typeof createApp> = createApp(App, Antd)
app.config.globalProperties = AppConfig
// app.component(Button.name, Button)
// 加载全部 Plugins
loadAllPlugins(app)
// 注册全局组件
registeGlobalComponent(app)

app.use(store).use(router).mount('#app')
