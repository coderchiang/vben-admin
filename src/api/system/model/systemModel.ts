import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
import { RouteMeta } from '/@/router/types';

export type AccountParams = BasicPageParams & {
  username?: string;
  nickname?: string;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};
export type DelParam = {
  id?: string;
};

export type DelBatcgParam = {
  ids?: string[];
};

export type RolePageParams = BasicPageParams & RoleParams;

export type DeptParams = {
  deptName?: string;
  status?: string;
};

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface UserInfoModel {
  email: string;
  name: string;
  introduction: string;
  phone: string;
  address: string;
}


export interface UserListItem {
  id: number;
  username: string;
  email: string;
  nickname: string;
  role_id: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface DeptListItem {
  id: string;
  orderNo: string;
  createTime: string;
  remark: string;
  status: number;
}

export interface LogListItem {
  id: string;
  orderNo: string;
  createTime: string;
  remark: string;
  status: number;
}

export interface MenuItem {
  id: string;
  pid:number;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  routePath: string;
}

export interface RouteItem {
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  alias?: string | string[];
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu interface
 */
export interface getMenuListByIdModel {
  id: number | string;
}

/**
 * @description: Get menu return value
 */
export type getMenuListByIdResult = RouteItem[];

export interface RoleListItem {
  id: string;
  roleName: string;
  roleValue: string;
  remark:string;
  status: number;
  orderNo: string;
}


//log
export interface LogQueryModel {

  id: string;
  PageSize:     string
	Page:      string
  operName: string;
  ipaddr: string;
  method:string;
  type: number;
}

export interface LogResultModel {
  id: string;
  method: string     //????????????

	operName    :  string      //?????????
  type : string  //????????????
	operUrl      : string     //????????????
	operIp      :  string     //?????????ip
	operLocation : string     //????????????

  browser       :string
	os           : string
	platform    :  string

	latencyTime  : string       //??????
	status       : string            //????????????
	operTime     : string          //????????????
  remark       : string        //??????


}





/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<UserListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuItem>;

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleListGetResultModel = RoleListItem[];
