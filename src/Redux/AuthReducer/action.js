import * as types from "./actionTypes";
const getAuthReq = () => {
  return {
    type: types.GET_AUTH_REQ,
  };
};
const getAuthSucc = () => {
  return {
    type: types.GET_AUTH_SUCC,
  };
};

const getAuthFail = () => {
  return {
    type: types.GET_AUTH_FAIL,
  };
};
export { getAuthFail, getAuthReq, getAuthSucc };
