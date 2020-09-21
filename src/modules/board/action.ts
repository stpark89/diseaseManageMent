import { createAction } from "@reduxjs/toolkit";
import BoardResponseVo from "dto/BoardResponseVo";

export enum FETCH_BOARD_FUNCTION {
  REQUEST = "FETCH_BOARD_REQUEST",
  SUCCESS = "FETCH_BOARD_SUCCESS",
  FAIL = "FETCH_BOARD_FAIL",
}

// 조회 요청
export const fetchBoardRequest = createAction(FETCH_BOARD_FUNCTION.REQUEST);

// 조회 성공한 경우
export const fetchBoardSuccess = createAction<BoardResponseVo[]>(
  FETCH_BOARD_FUNCTION.SUCCESS
);

// 실패
export const fetchBoardFail = createAction<Error>(FETCH_BOARD_FUNCTION.FAIL);

export const type = {
  FETCH_BOARD_FUNCTION,
};

export const action = {
  fetchBoardRequest,
  fetchBoardSuccess,
  fetchBoardFail,
};

export default {
  type,
  action,
};
