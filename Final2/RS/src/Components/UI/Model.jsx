import React, { Fragment } from "react";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModelOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(
        <ModelOverLay>{props.children}</ModelOverLay>,
        portal
      )}
    </Fragment>
  );
};

export default Model;
