import "./App.css";
import ExpenseItems from "./Components/ExpenseItems";

function App() {
  const expenses = [
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
  ];

  return (
    <div className="items">
      {expenses.map((items) => {
        return (
          <ExpenseItems
            key={items.title}
            title={items.title}
            amount={items.amount}
            exDate={items.date.toDateString()}
          />
        );
      })}
    </div>
  );
}

export default App;
