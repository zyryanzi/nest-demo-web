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
import Button from 'ant-design-vue/lib/button'
import 'ant-design-vue/dist/antd.less'
// import './styles/antd.less'

const app: ReturnType<typeof createApp> = createApp(
    App,
    {}
)
app.config.globalProperties = AppConfig
app.component(Button.name, Button)
// 加载全部 Plugins
loadAllPlugins(app)
// 注册全局组件
registeGlobalComponent(app)

app.use(store).use(router).mount('#app')
