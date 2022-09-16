import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return (
      <h2 className="expenses-list__fallback" style={{ color: "wheat" }}>
        Find not found
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense, index) => (
        <ExpenseItem
          key={index}
          amount={expense.amount}
          title={expense.title}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
