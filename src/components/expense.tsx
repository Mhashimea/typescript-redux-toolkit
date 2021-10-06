import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addExpense, addExpenseHistory } from '../store/expense';
import './style.css';

const Expense = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state: RootState) => state.expense);
  const [model, setModel] = React.useState<any>({});
  const [formVisible, setFormVisible] = React.useState<boolean>(true);

  const saveExpense = () => {
    dispatch(addExpense(Number(model.amount)));
    dispatch(addExpenseHistory(model));
    setFormVisible(false);
    setModel({});
  };
  return (
    <div className="expense">
      <div className="expense-header">
        <h1>Expenses</h1>
        <a onClick={() => setFormVisible(true)}>Add New Expense</a>
      </div>
      <div className="expense-view income-view">
        <h1>Total Expense</h1>
        <p>$ {expense.expense}</p>
      </div>
      <div className="expense-view income-view">
        <h1>Avilable Balance</h1>
        <p style={{ color: 'yellow' }}>
          $ {expense.totalIncome - expense.expense}
        </p>
      </div>
      {formVisible && (
        <div className="income-form">
          <h1>Add Expense</h1>
          <input
            placeholder="Title"
            onChange={(e) => setModel({ ...model, title: e.target.value })}
            value={model.title}
          />
          <input
            type="number"
            placeholder="Amount"
            onChange={(e) => setModel({ ...model, amount: e.target.value })}
            value={model.amount}
          />
          <div className="income-form-action">
            <button style={{ marginRight: 10 }} onClick={saveExpense}>
              Save{' '}
            </button>
            <button
              style={{ color: 'red' }}
              onClick={() => setFormVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Expense;
