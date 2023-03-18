const redux = require("redux");

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  return {
    counter: state.counter + 1,
  };
};

const rootReducer = redux.combineReducers({
  counter: CounterReducer,
});

const store = redux.legacy_createStore(rootReducer);

const conterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(conterSubscriber);
