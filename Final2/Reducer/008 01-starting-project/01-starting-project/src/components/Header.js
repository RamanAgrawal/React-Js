import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Redux/Index";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
