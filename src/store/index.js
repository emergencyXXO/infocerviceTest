import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {logger} from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from "../reducers/AppReducer";

let reducers = combineReducers({
    form: formReducer,
    app: AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));



window.store = store;

export default store;
