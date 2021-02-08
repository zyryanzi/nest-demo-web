import Cookies from 'js-cookie'

export default {
    /* __set(state: any, msg: { k: string; v: any }) {
        state[msg.k] = msg.v
    } */
    TOGGLE_SIDEBAR: (state: any) => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', '1')
        } else {
            Cookies.set('sidebarStatus', '0')
        }
    },
    CLOSE_SIDEBAR: (state: any, withoutAnimation: any) => {
        Cookies.set('sidebarStatus', '0')
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state: any, device: string) => {
        state.device = device
    },
    SET_SIZE: (state: any, size: string) => {
        state.size = size
        Cookies.set('size', size)
    }
}