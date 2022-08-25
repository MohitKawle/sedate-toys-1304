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


export const getHotelList = (dispatch) => {

    dispatch(hotelListRequest());
   return axios.get("http://localhost:8080/hotels")
        .then((res) => {
            dispatch(hotelListSuccess(res.data))
        })
        .catch((err) => dispatch(hotelListFailure()));
}