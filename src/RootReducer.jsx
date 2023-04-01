import { combineReducers } from "redux";
import FirstReducrCase from "./reducers/FirstReducer";
import SecondReducerCase from "./reducers/SecondReducer";
import ThirdReducerCase from "./reducers/ThirdReducer";

export const rootReducer = combineReducers({
  FirstReducrCase,
  SecondReducerCase,
  ThirdReducerCase,
});
