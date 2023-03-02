import "./App.css";
import ExpenseItems from "./Components/ExpenseItems";

function App() {
  const expenses = [
    { title: "Food", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "bakery", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Books", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Cloths", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Grocery", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Shops", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Bath", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Petrol", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Desiel", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Vegetables", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Egg", amount: "200 Rs", date: new Date(2023, 3, 1) },
    { title: "Paneer", amount: "300 Rs", date: new Date(2023, 3, 1) },
    { title: "Suit", amount: "400 Rs", date: new Date(2023, 3, 1) },
    { title: "Pant", amount: "500 Rs", date: new Date(2023, 3, 1) },
    { title: "Shirt", amount: "200 Rs", date: new Date(2023, 3, 1) },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Expense-Items
      </h1>
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
