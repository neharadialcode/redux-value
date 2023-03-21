import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Reducers";
import thunk from "redux-thunk";

const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default Store;
