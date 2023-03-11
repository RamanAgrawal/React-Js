import { useState } from "react";
import ExpenseItems from "./Components/ExpenseItems";
import NewExpense from "./Components/NewExpense";
const expense = [
  { id: "e1", title: "Shirt", amount: "300", date: new Date(2022, 3, 4) },
  { id: "e2", title: "Coat", amount: "500", date: new Date(2023, 3, 5) },
];
function App() {
  const [expenses, setExpenses] = useState(expense);
  const addExpense = (data) => {
    setExpenses((prev) => {
      return [data, ...prev];
    });
  };

  const handleDlete = (id) => {
    const newList = expenses.filter((item) => item.id !== id);
    setExpenses(newList);
  };

  return (
    <div>
      <button className="name">Khushhal Sharma</button>
      <h1>Expense-Items</h1>
      <NewExpense addExpense={addExpense} />
      <ExpenseItems items={expenses} delete={handleDlete} />
    </div>
  );
}

export default App;
