import { combineReducers } from "redux";
import SignupReducer from "./signup";

const RootReducer = combineReducers({ SignupReducer });

export default RootReducer;
