import store from '@/store'

// state 下的 module
type ModuleNameType = 'app' | 'dashboard' | 'user'

export function setStoreState<T>(
    module: ModuleNameType,
    key: keyof T,
    value: any
) {
    store.commit({
        type: module + '/_set',
        key: key,
        value: value
    })
}