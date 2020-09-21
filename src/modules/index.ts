import { combineReducers } from "@reduxjs/toolkit";
import { reducer as boardReducer, IBoardState } from "./board/reducer";
import { reducer as userInfoReducer, IUserState } from "./login/reducer";

export type RootState = {
  board: IBoardState;
  userInfo: IUserState;
};

const rootReducer = combineReducers<RootState>({
  board: boardReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
