import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Store/LoginContext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);
  const looutHandler = () => {
    ctx.logout();
    history.replace("/auth");
  };
  const isLoggesIn = ctx.isLoggesIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggesIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggesIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggesIn && (
            <li>
              <button onClick={looutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
