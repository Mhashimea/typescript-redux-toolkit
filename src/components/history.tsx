import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { deleteExpense } from '../store/expense';

const ExpenseHistory = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state: RootState) => state.expense);
  return (
    <div className="history">
      <h2>Expense History</h2>
      {expense.expenseHistory.map((his, index) => {
        return (
          <div className="history-item" key={index}>
            <p>{his.title}</p>
            <h4>$ {his.amount}</h4>
            <a onClick={() => dispatch(deleteExpense(index))}>Delete</a>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseHistory;
