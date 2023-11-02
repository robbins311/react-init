import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const saveSelectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return selectedYear === expense.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveSelectedYear={saveSelectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* 삼항연산자 && 구문의 첫번쨰 condition이 만족되면 그 다음부분이 rendering  */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((item, idx) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })} */}
      </Card>
    </div>
  );
};

export default Expenses;
