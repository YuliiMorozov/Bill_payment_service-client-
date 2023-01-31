import addressesReducer from './addresses/addressesSlice'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
export type AppDispatch = typeof store.dispatch;



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addresses: addressesReducer,
  },
})