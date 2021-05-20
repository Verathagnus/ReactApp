import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import './ExpenseForm.css';
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [formCancelValue, setFormCancelValue] = useState(true);
  const resetFormHandler = () => {
    setFormCancelValue(true);
  };

  const setFormHandler = () => {
    setFormCancelValue(false);
  };

  if (formCancelValue){
    return (
      <form>
      <div className='new-expense'>
        <button type='button' onClick={setFormHandler}>Add New Expense</button>
      </div>
      </form>
      );
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelForm={resetFormHandler}/>
    </div>
  );
};

export default NewExpense;