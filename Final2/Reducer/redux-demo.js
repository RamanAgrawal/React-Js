const redux = require("redux");

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 2,
    };
  }
  return state;
};

const store = redux.createStore(CounterReducer);

const conterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(conterSubscriber);

store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
