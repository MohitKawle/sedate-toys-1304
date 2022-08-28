import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_AUTH_REQ: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_AUTH_SUCC: {
      return { ...state, isLoading: false, isAuth: true, isError: false };
    }
    case types.GET_AUTH_FAIL: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};

export { reducer };
