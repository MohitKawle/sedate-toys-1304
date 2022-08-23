import { legacy_createStore,combineReducers } from "redux";
import {reducer as App}  from './AppReducer/reducer'


const store=legacy_createStore(App)

export {store}