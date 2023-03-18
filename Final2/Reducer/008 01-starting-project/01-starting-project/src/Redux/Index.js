import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        counter: state.counter + 5,
      };
    }
    case "SUB": {
      return {
        counter: state.counter - 5,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
