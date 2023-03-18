import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    }
    case "SUB": {
      return {
        counter: state.counter - action.payload,
        showCounter: state.showCounter,
      };
    }
    case "Toggle": {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
