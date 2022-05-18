import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import logger from 'redux-logger'

const middleware = new MiddlewareArray().concat(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware
})


export type AppDispatch = typeof store.dispatch
export default store;