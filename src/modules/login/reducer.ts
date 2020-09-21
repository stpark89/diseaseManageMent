import { createReducer } from "@reduxjs/toolkit";
import UserResponseVo, {
  empty as emptyUser,
  create as createUserInfo,
} from "dto/UserResponseVo";
import { createNextState } from "modules/helper";
import { fetchLoginFail, fetchLoginRequest, fetchLoginSuccess } from "./action";

export interface IUserState {
  userInfo: UserResponseVo;
  pending: boolean;
  error: Error | null;
}

const createInitialState = (): IUserState => ({
  userInfo: emptyUser,
  pending: false,
  error: null,
});

export const reducer = createReducer(createInitialState(), (builder) =>
  builder
    .addCase(fetchLoginRequest, (state) =>
      createNextState<IUserState>(state)({
        pending: true,
        error: null,
      })
    )
    .addCase(fetchLoginSuccess, (state, { payload: userResponseVo }) => {
      console.log("유저 정보 확인");
      console.log(userResponseVo);
      debugger;

      // 조회 성공한 경우
      return createNextState<IUserState>(state)({
        userInfo: createUserInfo(userResponseVo),
        pending: false,
        error: null,
      });
    })
    .addCase(fetchLoginFail, (state, { payload: error }) =>
      createNextState<IUserState>(state)({
        pending: false,
        error: error,
      })
    )
    .addDefaultCase((state: IUserState) => state as IUserState)
);
