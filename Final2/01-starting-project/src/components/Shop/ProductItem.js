import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import cartSlice, { cartActions } from "../store/Cart-slice";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
