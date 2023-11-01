import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const saveSelectedYearHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    // props.items.map((content, idx) => {
    //   return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveSelectedYear={saveSelectedYearHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
    //   )
    // })
  );
};

export default Expenses;
