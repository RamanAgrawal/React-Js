import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      <UpdateProfile />
    </div>
  );
}

export default App;
