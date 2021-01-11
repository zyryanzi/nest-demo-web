import store from '@/store'
import {setStoreState} from "@/store/utils"
import {useI18n} from 'vue-composable'
import {findKeyByValue} from "@/utils/common"
import {includes} from 'lodash'
import moment from 'moment'
import zhCN from "@/i18n/messages/zhCN";
import en from "@/i18n/messages/en";

const __LOCALE__ = store.state.app.language

if (!__LOCALE__) {
    setStoreState('app', 'language', 'zhCN')
}

// 语言模板
export const Locales: any = {}

/**
 * 语言名字命名要考虑三个部分：
 * 一是 antdv 组件国际化的语言名字，
 * 二是 i18n模版语言的命名，
 * 三是浏览器对于语言的命名（这里会跟 http 请求相关，也是后端能识别的语言命名），
 * 因此要将前两种语言的名字通过字典转换成标准名称，也就是浏览器的语言名使用SO 639-1标准
 */
export const TranslateTable: { [key: string]: string } = {
    en: 'en_US',
    zhCN: 'zh_CN'
}

export const LanguageNameList: { [key: string]: string } = {
    en: 'English',
    zhCN: '中文-简体'
}

export const i18nInstance = useI18n({
    locale: 'zhCN',
    messages: {
        zhCN,
        en
    }
})

/**
 * 自动加载 antd-vue 需要的语言模板
 */
function loadAtdLocales() {
    const files = require.context(
        '../../node_modules/ant-design-vue/es/locale-provider',
        true,
        /\.js$/
    )
    files.keys().forEach(k => {
        const filename = k.slice(1, k.lastIndexOf('.'))
        if (includes(TranslateTable, filename)) {
            const localeKey = findKeyByValue(TranslateTable, filename)
            if (localeKey) {
                Locales[localeKey] = files(k).default
            }
        }
    })
}

function _set(lang: keyof typeof TranslateTable): keyof typeof TranslateTable {
    i18nInstance.locale.value = lang as any
    moment.locale(TranslateTable[lang]) // 当前语言的时间
    setStoreState('app', 'language', lang)
    return lang
}

export function setLang(lang: string): Promise<keyof typeof TranslateTable | 'same'> {
    if (lang === i18nInstance.locale.value) {
        return Promise.resolve('same')
    }
    return Promise.resolve(_set(lang))
}

loadAtdLocales()// 加载 antd 模板
setLang(__LOCALE__)// 初始化语言

