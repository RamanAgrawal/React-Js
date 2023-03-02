import "./App.css";
import ExpenseItems from "./Components/ExpenseItems";

function App() {
  const expenses = [
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "600 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "700 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "800 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "900 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "1000 Rs", date: new Date(2023, 3, 1) },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Expense-Items</h1>
      <div className="Items">
        {expenses.map((items) => {
          return (
            <ExpenseItems
              key={items.title}
              title={items.title}
              amount={items.amount}
              exDate={items.date}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
