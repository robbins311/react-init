import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const [closeForm, setCloseForm] = useState(false);

  const closeFormHandler = () => {
    if (closeForm === false) {
      setCloseForm(true);
    } else {
      setCloseForm(false);
    }
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!closeForm && (
        <button onClick={closeFormHandler}>Add New Expense</button>
      )}
      {closeForm && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          close={closeFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
