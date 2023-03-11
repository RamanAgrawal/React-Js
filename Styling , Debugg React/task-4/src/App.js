import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const onAddUsers = (Username, Age, college) => {
    setUsers((prev) => {
      return [...prev, { name: Username, age: Age, college }];
    });
  };
  return (
    <div className="App">
      <h1
        style={{
          color: "white",
          fontFamily: "cursive",
          textDecoration: "underline",
        }}
      >
        User Details
      </h1>
      <AddUser onAddUsers={onAddUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
