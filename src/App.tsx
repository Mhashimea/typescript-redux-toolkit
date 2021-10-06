import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Expense from './components/expense';
import ExpenseHistory from './components/history';
import Income from './components/Income';
import { RootState } from './store';
import { addExpense } from './store/expense';

function App() {
  const dispatch = useDispatch();
  const expense = useSelector((state: RootState) => state.expense);
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="app app-layout">
      <h1 className="text-center">Welcome to expense tracker</h1>
      <Income />
      <Expense />
      <ExpenseHistory />
    </div>
  );
}

export default App;
