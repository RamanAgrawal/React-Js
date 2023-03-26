import React, { Fragment, useContext } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.showCarthandler} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="ReactMeals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
