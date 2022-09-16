import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    isToggledForm: false,
  });

  const [toggleForm, setToggleForm] = useState(false);

  const titleChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };
  const priceChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      enteredPrice: event.target.value,
    }));
  };
  const dateChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: formData.enteredTitle,
      amount: +formData.enteredPrice,
      date: new Date(formData.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    toggleFormHandler();
  };

  const toggleFormHandler = (props) => {
    setToggleForm((prevState) => {
      return !prevState;
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      {toggleForm ? (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input required onChange={titleChangeHandler} type="text" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input required onChange={dateChangeHandler} min="20.02.2019" type="date" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={priceChangeHandler}
              min="0.01"
              step="0.01"
              type="text"
              required
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        <div className=" ">
          <button onClick={toggleFormHandler} type="button">
            Add New Expense
          </button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
