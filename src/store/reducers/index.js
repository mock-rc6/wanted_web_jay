import { combineReducers } from "redux";
import SignupReducer from "./signup";
import loginReducer from "./login";
import profileReducer from "./profile";
const RootReducer = combineReducers({
    SignupReducer,
    loginReducer,
    profileReducer,
});

export default RootReducer;
