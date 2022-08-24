import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import {reducer as AppReducer}  from './AppReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';
import thunk from 'redux-thunk';

const root = combineReducers({AppReducer,AuthReducer});

const store=legacy_createStore(root , applyMiddleware(thunk));

export {store}