import {AppStateType} from '@/store/modules/app/state'
import {DashboardStateType} from "@/store/modules/dashboard/state"
import {UserStateType} from "@/store/modules/user/state";

// vuex state 的模块类型
type ModuleType = {
    app: AppStateType;
    console: DashboardStateType;
    user: UserStateType;
}

// 全部StateType
export type StateType = ModuleType

// http请求响应格式
export declare interface ApiResponse {
    errCode: number;
    errMsg?: string;
    data?: any;
}

// ant-design-button 颜色
export type ButtonColorType =
    | 'primary'
    | 'danger'
    | 'dashed'
    | 'ghost'
    | 'default'
    | 'link'

// icon的类型
export type IconType = 'icon' | 'iconfont'

// 对话框打开类型
export type ModalOpenMode = 'add' | 'edit' | 'other'

export interface BasicUserType {
    id: number;
    name?: string;
    avatar?: string;
    role?: string;
    department?: string;
    code?: string;
    createTime?: string;
    description?: string;
    email?: string;
    lastLoginTime?: string;
    modifyTime?: string;
    modifyUser?: number;
    nickName?: string;
    phone?: string;
    roleId?: number;
    roleName?: string;
    status?: number;
    tenantId?: number;
    type?: string;
    userId?: number;
    username?: string;
    cloudRole?: string;
}

export interface ListParamType {
    id: number;
    pageSize: number;
    pageNum: number;
}

// 接口响应格式
export interface HttpResponse {
    status: number;
    statusText: string;
    data: {
        code: number;
        desc: string;
        [key: string]: any;
    };
}

// 接口通用参数配置
export interface HttpListQuery {
    pageNum?: number;
    pageSize?: number;
    orderNum?: number;
    [key: string]: any;
}

// 团队列表类型
export interface TeamListType {
    createTime?: string;
    description?: string;
    id?: number;
    memberNum?: number;
    name?: string;
    orderNum?: number;
    projectNum?: number;
    tenantId?: number;
    roleId?: number; // 用户在当前所在团队的权限
}

export interface TeamMemberType {
    id?: number;
    roleId?: number;
    status?: number;
    teamId?: number;
    tenantId?: number;
    toolRole?: string;
    userId?: number;
    userTenantId?: number;
    cloudRole?: string;
}

export enum RoleType {
    '超级管理员' = 1,
    '子账号',
    '团队管理员',
    '团队成员',
    '团队访客',
    '项目管理员',
    '项目成员',
    '项目访客',
}

// 权限类型
export interface RoleItemType {
    createTime: string;
    id: number;
    roleId: number;
    modifyTime: string;
    parentId: number;
    remark: string;
    roleName: keyof typeof RoleType;
    type: number;
    menuIds: string;
}