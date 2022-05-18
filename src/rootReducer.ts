import { combineReducers } from "@reduxjs/toolkit";
import countReducer from './features/counter/counterSlice';

const reducer = combineReducers({
  counter: countReducer
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;