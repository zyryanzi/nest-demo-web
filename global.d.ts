/**
 * 将第三方变量挂载到每一个 vue 示例中
 */
import message from "ant-design-vue"

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: message
    }
}

declare global {
    interface X {
        name: string
        age: number
    }

    interface X1 {
        s: string
    }
}