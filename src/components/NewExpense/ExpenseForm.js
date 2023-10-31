import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  //event target으로 받으면 언제나 string임
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // 이전 상태 기억하기 1 (불안정)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // 이전 상태 기억하기 2 (안정)
    // setUserInput((prevState) => {
    // 	return {
    // 		...prevState, enteredTitle: event.target.value
    // 	}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //하나의 함수로 여러개의 handler 관리하기
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier == 'title') {
  //     setEnteredTitle(value);
  //   } else if (identifier == 'amount') {
  //     setEnteredAmount(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* onChnage를 쓰면 좋은게 모든 input type에 대응할수있음 */}
          <input type="text" onChange={titleChangeHandler} />
          {/* 하나의 function으로 여러개의 handler 작동 */}
          {/* <input type="text" onChange={ (event) => {inputChangeHandler('title', event.target.value)} } /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-11-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
