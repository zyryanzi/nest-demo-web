import {createApp} from 'vue'

/**
 * 加载所有 Plugins
 * @param app
 */
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
    const files = require.context('.', true, /\.ts$/)
    files.keys().forEach(k => {
        if (typeof files(k).default === 'function' && k !== './index.ts') {
            files(k).default(app)
        }
    })
}