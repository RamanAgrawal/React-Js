import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "../src/components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
function App() {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
