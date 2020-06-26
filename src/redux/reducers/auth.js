import axios from "axios";

import {
    AUTH_REQUESTED,
    AUTH_SUCCEED,
    AUTH_FAILED,
    LOG_OUT
} from "../actions/auth";

let initialUserInfo = {};
let initialAuthState = "unauthorized";


if (localStorage.getItem("userInfo") !== null) {
  initialUserInfo = JSON.parse(localStorage.getItem('userInfo'));
  initialAuthState = "loggedIn";
}
const initialState = {
    authState: initialAuthState,
    userInfo: initialUserInfo
};

export const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AUTH_REQUESTED:
            return {...initialState, authState: "loading"};
        case AUTH_SUCCEED:
            localStorage.setItem('userInfo',  JSON.stringify(payload));
            return {authState: "loggedIn", userInfo: payload};
        case AUTH_FAILED:
            return {...initialState, authState: "authFailed"};
        case LOG_OUT:
            localStorage.removeItem('userInfo');
            axios.defaults.headers.common['Authorization'] = "";

            return {...initialState};

        default:
            return state;
    }
};