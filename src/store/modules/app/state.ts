import { StateType } from '@/@types'
import { Module } from 'vuex'
import Cookies from 'js-cookie'

const state = {
    language: 'zhCN',
    theme: 'light',
    version: '0.0.1',
    fullLoading: false,
    loadingText: 'Loading...',
    currentActiveNav: '解决方案',
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? Cookies.get('sidebarStatus') : true,
        withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'small'
}
type AppStateType = typeof state
const app: Module<AppStateType, StateType> = { namespaced: true, ...state }

export { AppStateType, state }
export default app