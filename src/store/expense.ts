import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ExpenseState {
  totalIncome: number
  expense: number
  expenseHistory: any[]
  avaiableBalance: number
}

const initialState: ExpenseState = {
  totalIncome: 1500,
  expense: 0,
  expenseHistory: [],
  avaiableBalance: 0
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    // Reducer to add income
    addIncome: (state, action: PayloadAction<number>) => {
      state.totalIncome += action.payload
    },

    // to add expense amount 
    addExpense: (state, action: PayloadAction<number>) => {
      state.expense += action.payload
    },

    // to add history of the expense
    addExpenseHistory: (state, action: PayloadAction<any>) => {
      state.expenseHistory.push(action.payload)
    },

    // to delete the expense and its history
    deleteExpense: (state, action: PayloadAction<number>) => {
      state.expense -= state.expenseHistory[action.payload].amount
      state.expenseHistory.splice(action.payload, 1)
    }

  }
})

export const { addExpense, addIncome, addExpenseHistory, deleteExpense } = expenseSlice.actions

export default expenseSlice.reducer