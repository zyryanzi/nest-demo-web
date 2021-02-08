import { StateType } from '@/@types'
import { Module } from 'vuex'
import variables from '@/styles/antd.less'
const defaultSettings = require('@/settings.ts')
const { tagsView, fixedHeader, sidebarLogo, uniqueOpened, showFooter, footerTxt, caseNumber } = defaultSettings

const state = {
    // theme: variables.theme,
    showSettings: false,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    uniqueOpened: uniqueOpened,
    showFooter: showFooter,
    footerTxt: footerTxt,
    caseNumber: caseNumber
}
type SettingsStateType = typeof state
const settings: Module<SettingsStateType, StateType> = { namespaced: true, ...state }

export { SettingsStateType, state }
export default settings