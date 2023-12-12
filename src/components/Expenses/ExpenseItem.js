import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className={styles.expense_item}>
        <ExpenseDate date={props.date} />
        <div className={styles.expense_item__description}>
          <h2>{props.title}</h2>
          <div className={styles.expense_item__price}>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
