import { fetchLoginFail, fetchLoginRequest, fetchLoginSuccess } from "./action";
import { SagaIterator } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import UserResponseVo from "dto/UserResponseVo";

export function* watchFetchUserInfo$({
  payload: userRequestVo,
}: ReturnType<typeof fetchLoginRequest>): SagaIterator<UserResponseVo> {
  try {
    const dbSearchUserInfo: UserResponseVo = {
      userId: userRequestVo.userId,
      userName: "갔다왔다",
    };

    yield put(fetchLoginSuccess(dbSearchUserInfo));
    return dbSearchUserInfo;
  } catch (error) {
    yield put(fetchLoginFail(error));
    return { userId: "에러", userName: "에러" };
  }
}

export function* watchFetchUserInfoRequest$(): SagaIterator {
  yield takeEvery(fetchLoginRequest, watchFetchUserInfo$);
}
