import { createAction } from "@reduxjs/toolkit";
import UserRequestVo from "dto/UserRequestVo";
import UserResponseVo from "dto/UserResponseVo";

/**
 * 타입을 만듬. FETCH_USER_LOGIN REQUEST, SUCCESS, FAIL
 */

export enum FETCH_USER_LOGIN {
  REQUEST = "FETCH_USER_REQUEST",
  SUCCESS = "FETCH_USER_SUCCESS",
  FAIL = "FETCH_USER_FAIL",
}

// 조회 요청
export const fetchLoginRequest = createAction<UserRequestVo>(
  FETCH_USER_LOGIN.REQUEST
);
export const fetchLoginSuccess = createAction<UserResponseVo>(
  FETCH_USER_LOGIN.SUCCESS
);
export const fetchLoginFail = createAction<Error>(FETCH_USER_LOGIN.FAIL);

export const type = {
  FETCH_USER_LOGIN,
};

export const action = {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFail,
};

export default {
  type,
  action,
};
