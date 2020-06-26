import { combineReducers } from "redux";
import { languageReducer } from "./language";
import { shoppingCartReducer } from "./shoppingCart";
import {authReducer} from "./auth";

const rootReduser = combineReducers({
  language: languageReducer,
  auth: authReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReduser;