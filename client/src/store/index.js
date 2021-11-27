import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";



const appReducer = combineReducers({

});
const rootReducer = (state, action) => {
  
  return appReducer(state, action);
};

export default createStore(rootReducer, applyMiddleware(loggerMiddleware));
