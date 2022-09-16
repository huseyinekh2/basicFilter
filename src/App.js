import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const EXPENSES_DUMMY = [
  { title: "Car Insurance", amount: "294.67", date: new Date(2022, 6, 26) },
  { title: "New TV", amount: "294.50", date: new Date(2021, 1, 26) },
  { title: "Toilet paper", amount: "200.30", date: new Date(2020, 9, 26) },
  { title: "New Desk (Wooden)", amount: "600.1", date: new Date(2022, 11, 26) },
];
function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DUMMY);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses  expenses={expenses} />
    </div>
  );
}

export default App;
