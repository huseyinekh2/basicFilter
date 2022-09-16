import React from "react";
import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Now", value: 0 },
    { label: "Dec", value: 0 },
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseMount = expense.date.getMonth();
    chartDataPoints[expenseMount].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
