export default {
    __set(state: any, msg: { k: string; v: any }) {
        state[msg.k] = msg.v
    }
}