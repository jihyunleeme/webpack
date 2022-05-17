import { configureStore } from '@reduxjs/toolkit'
import countReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;