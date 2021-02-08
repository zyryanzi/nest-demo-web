declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-count-to'
declare module 'echarts'

/* declare module "@vue/runtime-core" {
  import { Message } from "ant-design-vue"
  interface ComponentCustomProperties {
    $message: Message;
  }
} */
