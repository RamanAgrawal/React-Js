import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Error.module.css";
const ErrorModel = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.confirm}></div>
      <Card className={classes.model}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.confirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModel;
