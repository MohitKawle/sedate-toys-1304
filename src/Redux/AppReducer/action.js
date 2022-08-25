import * as types from './actionTypes';
import axios from 'axios';


export const hotelListRequest = () => {

    return { type: types.HOTEL_LIST_REQUEST }
}

export const hotelListSuccess = (payload) => {

    return { type: types.HOTEL_LIST_SUCCESS, payload }
}

export const hotelListFailure = () => {

    return { type: types.HOTEL_LIST_FALIURE }
}

export const restaurantListRequest = () => {

    return { type: types.RESTAURANTS_LIST_REQUEST }
}

export const restaurantListSuccess = (payload) => {

    return { type: types.RESTAURANTS_LIST_SUCCESS, payload }
}

export const restaurantListFailure = () => {

    return { type: types.RESTAURANTS_LIST_FALIURE }
}


export const getHotelList = (dispatch) => {

    dispatch(hotelListRequest());
   return axios.get("http://localhost:8080/hotels")
        .then((res) => {
            dispatch(hotelListSuccess(res.data))
        })
        .catch((err) => dispatch(hotelListFailure()));
}

export const getRestuarantList = (dispatch) => {

    dispatch(restaurantListRequest());
   return axios.get("http://localhost:8080/restaurants")
        .then((res) => {
            dispatch(restaurantListSuccess(res.data))
        })
        .catch((err) => dispatch(restaurantListFailure()));
}