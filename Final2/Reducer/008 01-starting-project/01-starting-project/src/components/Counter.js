import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const store = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{store}</div>
      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>Inc</button>
        <button onClick={() => dispatch({ type: "SUB" })}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
