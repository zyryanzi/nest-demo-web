/**
 * 封装常规 mutation 操作
 */
export default {
    __set(state: any, msg: { k: string; v: any }) {
        state[msg.k] = msg.v
    }
}