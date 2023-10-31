import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // useState는 무조건 컴포넌트 함수안에서 호출해야함
  // 현재상태(이름)을 먼저쓰고, 두번재값엔 set(업데이트)값 / 인자값에는 초기값이 설정됨.
  const [title, setTitle] = useState(props.title);

  console.log('react!!!');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
};

export default ExpenseItem;
