import { combineReducers } from "@reduxjs/toolkit";
import { reducer as boardReducer, IBoardState } from "./board/reducer";

export type RootState = {
  board: IBoardState;
};

const rootReducer = combineReducers<RootState>({
  board: boardReducer,
});

export default rootReducer;
