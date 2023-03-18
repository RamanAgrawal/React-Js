import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./Auth.ActionTypes";

const userInfo = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("userId"))
  : null;

const initialState = {
  loading: false,
  error: false,
  userInfo: userInfo,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
