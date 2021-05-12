import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  //GetUserInfoByUserIdParams,
  //GetUserInfoByUserIdModel,
} from './model/loginModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  Logout='/logout'
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function logout(params?:any) {
  return defHttp.post<any>(
    {
      url: Api.Logout,
      params,
    },
  );
}
