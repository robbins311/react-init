import './Card.css';

const Card = (props) => {
  // 래퍼로 감싸려면 props.children 써야됨(리액트 내장함수)
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
