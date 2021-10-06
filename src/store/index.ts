import { configureStore } from '@reduxjs/toolkit'
import expenseReducer from '../store/expense'

export const store = configureStore({
  reducer: {
    expense: expenseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch