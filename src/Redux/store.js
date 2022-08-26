import { legacy_createStore,combineReducers, applyMiddleware,compose } from "redux";
import {reducer as AppReducer}  from './AppReducer/reducer';
import {reducer as AuthReducer} from './AuthReducer/reducer';
import thunk from 'redux-thunk';

const root = combineReducers({AppReducer,AuthReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(root ,composeEnhancers(applyMiddleware(thunk)));

export {store}