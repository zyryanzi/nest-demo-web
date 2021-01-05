import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {AppConfig} from "@/config/app";

// import Cookies from 'js-cookie'

// 在线编辑器
// import mavonEditor from 'mavon-editor'


const app: ReturnType<typeof createApp> = createApp(App)
app.config.globalProperties = AppConfig

app.use(store).use(router).mount('#app')
// app.use(mavonEditor)

/*app.use(Element, {
    size: Cookies.get('size') || 'small' // set element-ui default size
})*/
