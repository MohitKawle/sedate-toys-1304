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

export const placesRequest = () => {

    return { type: types.PLACES_REQUEST }
}

export const placesSuccess = (payload) => {

    return { type: types.PLACES_SUCCESS, payload }
}

export const placesFailure = () => {

    return { type: types.PLACES_FAILURE }
}

export const placesdata = (payload) => (dispatch) =>{
    dispatch(placesRequest())
    axios.get("http://localhost:8000/items",payload)
    .then((r)=>{dispatch(placesSuccess(r.data))})
    .catch((e)=>{dispatch(placesFailure(e))})
}