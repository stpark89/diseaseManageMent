import { watchFetchAllBoardList$ } from "modules/board/saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([watchFetchAllBoardList$()]);
}

export default rootSaga;
