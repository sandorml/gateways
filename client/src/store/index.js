import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";
import gatewayReducers from "./gateway";
import peripheralReducers from "./peripheral";

const appReducer = combineReducers({
  gatewayReducers,
  peripheralReducers,
});
export default createStore(
  appReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);
