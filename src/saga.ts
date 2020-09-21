import { watchFetchAllBoardList$ } from "modules/board/saga";
import { watchFetchUserInfoRequest$ } from "modules/login/saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([watchFetchAllBoardList$(), watchFetchUserInfoRequest$()]);
}

export default rootSaga;
