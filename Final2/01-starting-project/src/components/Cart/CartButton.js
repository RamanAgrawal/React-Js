import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/Ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.cart.totalQuantity;
  });
  console.log(store);
  const togglehandle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={togglehandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{store}</span>
    </button>
  );
};

export default CartButton;
