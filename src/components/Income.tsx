import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addExpense, addExpenseHistory, addIncome } from '../store/expense';
import './style.css';

const Income = () => {
  const dispatch = useDispatch();
  const [isAddExpense, setIsAddexpense] = React.useState<Boolean>(false);
  const expense = useSelector((state: RootState) => state.expense);
  const [model, setModel] = React.useState<any>({});

  const saveExpense = () => {
    dispatch(addIncome(Number(model.amount)));
    setIsAddexpense(false);
  };
  return (
    <div className="income">
      <div className="income-view">
        <h1>Total Income</h1>
        <p>$ {expense.totalIncome}</p>
      </div>

      {!isAddExpense ? (
        <button onClick={() => setIsAddexpense(true)}> Add New Income</button>
      ) : (
        <div className="income-form">
          <h1>Add Income</h1>
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setModel({ ...model, amount: e.target.value })}
          />
          <div className="income-form-action">
            <button style={{ marginRight: 10 }} onClick={saveExpense}>
              Save{' '}
            </button>
            <button
              style={{ color: 'red' }}
              onClick={() => setIsAddexpense(false)}
            >
              {' '}
              Cancel{' '}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Income;
