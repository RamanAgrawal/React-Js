import { useDispatch } from "react-redux";
import { uiActions } from "../store/Ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const togglehandle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={togglehandle}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
