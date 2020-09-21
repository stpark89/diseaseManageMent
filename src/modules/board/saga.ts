import BoardResponseVo from "dto/BoardResponseVo";
import { IBoardState } from "./reducer";
import { SagaIterator } from "redux-saga";
import { fetchBoardFail, fetchBoardRequest, fetchBoardSuccess } from "./action";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchAllBoardList$(): SagaIterator<BoardResponseVo[]> {
  try {
    const tempBoardList: BoardResponseVo[] = [
      {
        boardId: 1,
        boardTitle: "첫번째 보드 타이틀 ",
        boardContent: "보드 내용 들어간다.",
      },
      {
        boardId: 2,
        boardTitle: "두번째 보드 타이틀 ",
        boardContent: "두번쨰 시작한다니까 ?",
      },
    ];

    yield put(fetchBoardSuccess(tempBoardList));

    return tempBoardList;
  } catch (error) {
    yield put(fetchBoardFail(error));
    return [];
  }
}

export function* watchFetchAllBoardList$(): SagaIterator {
  yield takeEvery(fetchBoardRequest, fetchAllBoardList$);
}
