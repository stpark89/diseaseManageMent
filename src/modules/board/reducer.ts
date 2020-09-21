import { createNextState } from "./../helper";
import { createReducer } from "@reduxjs/toolkit";
import BoardResponseVo from "dto/BoardResponseVo";
import { fetchBoardFail, fetchBoardRequest, fetchBoardSuccess } from "./action";

export interface IBoardState {
  items: BoardResponseVo[];
  pending: boolean;
  error: Error | null;
}

const createInitialState = (): IBoardState => ({
  items: [],
  pending: false,
  error: null,
});

export const reducer = createReducer(createInitialState(), (builder) =>
  builder
    .addCase(fetchBoardRequest, (state) =>
      createNextState<IBoardState>(state)({ pending: true, error: null })
    )
    .addCase(fetchBoardSuccess, (state, { payload: boardList }) => {
      console.log(
        "넘어온 보드 리스트 ---- 원래는 saga 에서 서버 ( boot ) 호출 해서 디비 정보 조회해야함. axios 활용 "
      );
      console.log(boardList);
      debugger;

      // 조회 성공한 경우
      return createNextState<IBoardState>(state)({
        items: [...boardList],
        pending: false,
        error: null,
      });
    })
    .addCase(fetchBoardFail, (state, { payload: error }) =>
      createNextState<IBoardState>(state)({
        pending: false,
        error: error,
      })
    )
    .addDefaultCase((state: IBoardState) => state as IBoardState)
);
