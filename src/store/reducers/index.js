import { combineReducers } from "redux";
import SignupReducer from "./signup";
import loginReducer from "./login";

const RootReducer = combineReducers({ SignupReducer, loginReducer });

export default RootReducer;
