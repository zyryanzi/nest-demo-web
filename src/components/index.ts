import {kebabCase} from 'lodash'
import {createFromIconfontCN} from '@ant-design/icons-vue'
import {StaticConfig} from '@/config/app';
import {createApp} from 'vue'

// iconfont的使用: 2x.antdv.com/components/icon-cn/#components-icon-demo-use-iconfont.cn
const IconFont: any = createFromIconfontCN({
    scriptUrl: StaticConfig.IconfontURL
})

/**
 * 自动注册全局组件
 * @param app
 */
export function registeGlobalComponent(app: ReturnType<typeof createApp>) {
    const files = require.context('./global', true, /\.(vue|ts)$/)
    files.keys().forEach(k => {
        const config = files(k)
        let name = kebabCase(k.replace(/^\.\//, ''))
            .replace(/\.\w+$/, '')
        name = name.slice(0, name.lastIndexOf('-vue'))
        app.component(name, config.default || config)
    })
    console.log('--- iconfont: ', IconFont)
    app.component('IconFont', IconFont)
}