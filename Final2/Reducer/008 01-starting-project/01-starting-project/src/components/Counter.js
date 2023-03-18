import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counerActions } from "../Redux/Index";
const Counter = () => {
  const store = useSelector((state) => {
    return state.counter.counter;
  });

  const showcounter = useSelector((state) => {
    return state.showCounter;
  });

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counerActions.Toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{store}</div>}
      <div>
        <button onClick={() => dispatch(counerActions.ADD(5))}>Inc</button>
        <button onClick={() => dispatch(counerActions.SUB(5))}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
