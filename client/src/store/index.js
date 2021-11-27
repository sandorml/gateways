import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import gatewayReducers from "./gateway";

const appReducer = combineReducers({
  gatewayReducers,
});
export default createStore(
  appReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
