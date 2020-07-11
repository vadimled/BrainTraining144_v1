import {combineReducers} from "redux";
import headerReducer from "../reducers/headerReducer";
import loginReducer from "../reducers/loginReducer";
import userReducer from "./userReducer";
import registerReducer from "../reducers/registerReducer";
import gameReducer from "./gameReducer"

export default combineReducers({
  user: userReducer,
  header: headerReducer,
  auth: combineReducers({
    register: registerReducer,
    login: loginReducer
  }),
  game: gameReducer
});

