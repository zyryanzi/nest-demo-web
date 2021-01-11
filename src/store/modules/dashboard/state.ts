import {Module} from "vuex";
import {StateType} from "@/@types";

const state = {
    // todo
    expired: true,
    sidebarFold: false, // 侧边栏菜单是否折叠
    thirdPanelFold: true, // 第三级版面是否折叠
    teamDetaiPanel: '0', // 团队详情里 tabbar 当前活跃的 key
    teamGroupType: 'all', // 成员分组当前选择
    myTeamList: [], // 我所在的团队
    // selectedTeam: {} as TeamListType, // 当前选择的团队
    thirdPanelLoading: false, // 团队详情是否正在加载
    // roleList: [] as RoleItemType[], // 权限列表
    // subAccountList: [] as BasicUserType[], // 所有的子账号列表
    // selectedTeamMemberList: [] as BasicUserType[],
    backPathList: [] as string[], // 返回路径列表
    // selectedTeamCloudRoleList: [] as CloudRoleItem[], // 当前选择团队的云角色列表
    projectList: [] // 项目列表
}

type DashboardStateType = typeof state

const dashboard: Module<DashboardStateType, StateType> = {
    namespaced: true,
    ...state
}

export {DashboardStateType, state}
export default dashboard