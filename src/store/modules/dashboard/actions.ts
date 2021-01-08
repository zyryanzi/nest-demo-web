import {HttpListQuery, HttpResponse, StateType} from "@/@types";
import {Store} from "vuex";

/**
 * 控制台
 */
const dashboardActions = {
    // 用户角色列表
    async getRoleList(): Promise<HttpResponse | number> {
        // TODO
        /*const res = await CommonService.getRoleInfoList()
        if (res.status === 200) {
            const data = res.data.data
            setStoreState('dashboard', 'roleList', data ? data : [])
            return res
        }*/
        return 0
    },

    // 团队列表
    async getTeamList(
        context: Store<StateType>,
        params: HttpListQuery
    ): Promise<HttpResponse | number> {
        // TODO
        /*const res = await TeamService.list({...params})
        if (res.status === 200) {
            const data = res.data.data
            setStoreState('dashboard', 'myTeamList', data.rows ? data.rows : [])
            return res
        }*/
        return 0
    }
}

type DashboardActionsType = keyof typeof dashboardActions

export {DashboardActionsType}
export default dashboardActions