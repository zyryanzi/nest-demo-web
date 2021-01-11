import {createLogger, createStore, Store} from 'vuex'
import {StateType} from '@/@types'
import {InjectionKey} from 'vue'
import mutations from './mutations'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

export const key: InjectionKey<Store<StateType>> = Symbol()

export default createStore({
    // state: {},
    strict: true,
    mutations,
    actions: {},
    modules: {...modules},
    plugins:
        process.env.NODE_ENV !== 'production' ? [
            createLogger(),
            createPersistedState({
                paths: ['app', 'dashboard', 'user']
            })
        ] : [
            createPersistedState({
                paths: ['app', 'dashboard', 'user']
            })
        ]
})
