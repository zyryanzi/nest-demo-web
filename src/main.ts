import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import CompositionAPI from '@vue/composition-api'

import {AppConfig} from "@/config/app"
import {loadAllPlugins} from '@/plugins'
import {registeGlobalComponent} from "@/components/index";

// 语言国际化
import '@/i18n/index'
import './styles/antd.less'


// import Cookies from 'js-cookie'

// 在线编辑器
// import mavonEditor from 'mavon-editor'


const app: ReturnType<typeof createApp> = createApp(App)
app.config.globalProperties = AppConfig
// 加载全部 Plugins
loadAllPlugins(app)
// 注册全局组件
registeGlobalComponent(app)

app.use(store).use(router).mount('#app')
