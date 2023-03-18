import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const store = useSelector((state) => {
    return state.counter;
  });

  const showcounter = useSelector((state) => {
    return state.showCounter;
  });

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "Toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{store}</div>}
      <div>
        <button onClick={() => dispatch({ type: "ADD", payload: 2 })}>
          Inc
        </button>
        <button onClick={() => dispatch({ type: "SUB", payload: 2 })}>
          Dec
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
