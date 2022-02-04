import { createStore, compose, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";

//Redux DevTools Chrome plugin configuration.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create the store
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)));