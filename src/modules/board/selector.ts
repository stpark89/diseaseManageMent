import { IBoardState } from "./reducer";
import BoardResponseVo from "dto/BoardResponseVo";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "modules";

export const selectAll = createSelector<
  RootState,
  BoardResponseVo[],
  boolean,
  Error | null,
  IBoardState
>(
  (state) => state.board.items,
  (state) => state.board.pending,
  (state) => state.board.error,
  (items, pending, error) => ({ items, pending, error })
);

export const selectAllBoardList = createSelector(
  [selectAll],
  (state) => state.items
);

export default {
  selectAll,
  selectAllBoardList,
};
