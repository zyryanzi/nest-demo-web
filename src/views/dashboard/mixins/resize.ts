import { debounce } from '@/utils'
import { onMounted, reactive, onBeforeUnmount, onActivated, onDeactivated, toRefs, defineComponent } from 'vue'

export default {
    setup: (props: {}, context: any) => {
        const orgData: { [key: string]: any } = { $_sidebarElm: null, $_resizeHandler: null }
        const data = reactive(orgData)
        // use $_ for mixins properties
        // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
        const $_initResizeEvent = () => {
            window.addEventListener('resize', data.$_resizeHandler)
        }
        const $_destroyResizeEvent = () => {
            window.removeEventListener('resize', data.$_resizeHandler)
        }
        const $_sidebarResizeHandler = (e: any) => {
            if (e.propertyName === 'width') {
                data.$_resizeHandler()
            }
        }
        const $_initSidebarResizeEvent = () => {
            data.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
            data.$_sidebarElm && data.$_sidebarElm.addEventListener('transitionend', data.$_sidebarResizeHandler)
        }
        const $_destroySidebarResizeEvent = () => {
            data.$_sidebarElm && data.$_sidebarElm.removeEventListener('transitionend', data.$_sidebarResizeHandler)
        }

        const $_resizeHandler = debounce(() => {
            if (context.chart) {
                context.chart.resize()
            }
        }, 100, false)

        onMounted(() => {
            $_resizeHandler()
            $_initResizeEvent()
            $_initSidebarResizeEvent()
        })
        onBeforeUnmount(() => {
            $_destroyResizeEvent()
            $_destroySidebarResizeEvent()
        })
        // to fixed bug when cached by keep-alive
        // https://github.com/PanJiaChen/vue-element-admin/issues/2116
        onActivated(() => {
            $_initResizeEvent()
            $_initSidebarResizeEvent()
        })
        onDeactivated(() => {
            $_destroyResizeEvent()
            $_destroySidebarResizeEvent()
        })
        return {
            ...toRefs(data)
        }
    }
}
