import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../UI/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';
import '../UI/Card.css';
import '../UI/ExpensesFilter.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const expenses = props.expenses;
  const changeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const filteredExpenses = props.expenses.filter((expense)=> {
    return expense.date.getFullYear() == filteredYear;
  });

  


  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilterYear={changeFilterHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList expenses={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;