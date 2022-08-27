import * as types from "./actionTypes";
import axios from "axios";

export const hotelListRequest = () => {
  return { type: types.HOTEL_LIST_REQUEST };
};

export const hotelListSuccess = (payload) => {
  return { type: types.HOTEL_LIST_SUCCESS, payload };
};

export const hotelListFailure = () => {
  return { type: types.HOTEL_LIST_FAILURE };
};

export const restaurantListRequest = () => {
  return { type: types.RESTAURANTS_LIST_REQUEST };
};

export const restaurantListSuccess = (payload) => {
  return { type: types.RESTAURANTS_LIST_SUCCESS, payload };
};

export const restaurantListFailure = () => {
  return { type: types.RESTAURANTS_LIST_FAILURE };
};

export const sightListRequest = () => {
  return { type: types.SIGHT_LIST_REQUEST };
};

export const sightListSuccess = (payload) => {
  return { type: types.SIGHT_LIST_SUCCESS, payload };
};

export const sightListFailure = () => {
  return { type: types.SIGHT_LIST_FAILURE };
};

export const addToBasketRequest = () => {
  return {
    type: types.ADD_TO_BASKET_REQUEST,
  };
};

export const addToBasketSuccess = (payload) => {
  return {
    type: types.ADD_TO_BASKET_SUCCESS,
    payload,
  };
};

export const addToBasketFailure = () => {
  return {
    type: types.ADD_TO_BASKET_FAILURE,
  };
};

export const getHotelList = (dispatch) => {
  dispatch(hotelListRequest());
  return axios
    .get("http://localhost:8080/hotels")
    .then((res) => {
      dispatch(hotelListSuccess(res.data));
    })
    .catch((err) => dispatch(hotelListFailure()));
};

export const placesRequest = () => {
  return { type: types.PLACES_REQUEST };
};

export const placesSuccess = (payload) => {
  return { type: types.PLACES_SUCCESS, payload };
};

export const placesFailure = () => {
  return { type: types.PLACES_FAILURE };
};

export const placesdata = (payload) => (dispatch) => {
  dispatch(placesRequest());
  axios
    .get("http://localhost:8080/items", payload)
    .then((r) => {
      dispatch(placesSuccess(r.data));
    })
    .catch((e) => {
      dispatch(placesFailure(e));
    });
};

export const getRestuarantList = (dispatch) => {
  dispatch(restaurantListRequest());
  return axios
    .get("http://localhost:8080/restaurants")
    .then((res) => {
      dispatch(restaurantListSuccess(res.data));
    })
    .catch((err) => dispatch(restaurantListFailure()));
};

export const getSightList = (dispatch) => {
  dispatch(sightListRequest());
  return axios
    .get("http://localhost:8080/sight")
    .then((res) => {
      dispatch(sightListSuccess(res.data));
    })
    .catch((err) => dispatch(sightListFailure()));
};

// export const removeFromBasket = (id) => async (dispatch) => {
//   const updatedBasket = basket.filter(
//     (basketItem) => basketItem.id !== id
//   );

//   dispatch({
//     type: types.REMOVE_FROM_BASKET,
//     payload: updatedBasket,
//   });
// };

export const addToBasket = () => (dispatch) => {
  dispatch(addToBasketRequest());
  return axios
    .get("http://localhost:8080/basket")
    .then((res) => {
      console.log("res:", res.data);
      return dispatch(addToBasketSuccess(res.data));
    })
    .catch((e) => {
      dispatch(addToBasketFailure(e));
    });
};
