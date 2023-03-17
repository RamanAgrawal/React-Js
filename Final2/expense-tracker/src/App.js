import "./App.css";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      <UpdateProfile />
      <ForgotPassword />
    </div>
  );
}

export default App;
