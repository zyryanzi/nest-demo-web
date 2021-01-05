/**
 * 跟应用全局相关的静态配置放在这里
 */
import {message} from "ant-design-vue";

const AppConfig = {
    $message: message
}
const StaticConfig = {
    MaxPageSize: 1000,
    IconfontURL: ''
}

export {AppConfig, StaticConfig}