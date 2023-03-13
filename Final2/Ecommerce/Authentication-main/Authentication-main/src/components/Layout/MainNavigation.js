import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Store/LoginContext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
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
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
