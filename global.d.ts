/**
 * 将第三方变量挂载到每一个 vue 示例中
 */
import {Message} from "ant-design-vue/@types/message";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: Message
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