import { useDispatch } from "react-redux";
import createSagaMiddleware from "redux-saga";
import {
  configureStore,
  getDefaultMiddleware,
  isPlain,
} from "@reduxjs/toolkit";

import rootReducer, { RootState } from "./modules";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: true,
    immutableCheck: false,
    serializableCheck: {
      isSerializable: (value: any) => {
        if (isPlain(value)) {
          return true;
        }
        try {
          JSON.stringify(value);
          return true;
        } catch (err) {
          return false;
        }
      },
    },
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// export type AppDispatch = typeof store.dispatch;
/** 
export const useThunkDispatch = (): Dispatch<AnyAction> =>
  useDispatch<AppDispatch>();
 
export type ThunkSupportDispatch = ThunkDispatch<
  RootState,
  unknown | Record<string, unknown>,
  AnyAction
>;
  */

sagaMiddleware.run(rootSaga);

export default store;
