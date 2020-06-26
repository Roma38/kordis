import axios from "axios";

import {API_HOST} from "../../constants";
import {useHistory} from "react-router-dom";

export const AUTH_REQUESTED = "AUTH_REQUESTED";
export const AUTH_SUCCEED = "AUTH_SUCCEED";
export const AUTH_FAILED = "AUTH_FAILED";
export const LOG_OUT = "LOG_OUT";

export const authRequested = () => ({
    type: AUTH_REQUESTED,
});

export const authSucceed = userInfo => ({
    type: AUTH_SUCCEED,
    payload: userInfo
});

export const authFailed = error => ({
    type: AUTH_FAILED,
    payload: error
});

export const logOut = () => ({
    type: LOG_OUT
});

const uploadAvatar = (blob, id) => {
    const formData = new FormData();
    formData.append('picture', blob);

    return axios({
        method: 'post',
        url: `${API_HOST}/api/user/uploadphoto/${id}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    })
}

const uploadCard = (blob, id) => {
    const formData = new FormData();
    formData.append('picture', blob);

    return axios({
        method: 'post',
        url: `${API_HOST}/api/user/uploadcard/${id}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    })
}

export const registrateUser = (data, idCardFile, avatar) => dispatch => {
    let userInfo;
    let resData;
    dispatch(authRequested);
    axios({
        method: 'post',
        url: `${API_HOST}/api/auth/register`,
        data: data
    }).then(apiResponse => {
        resData = apiResponse.data;
        localStorage.setItem("token", resData.token);
        axios.defaults.headers.common['Authorization'] = resData.token;

        userInfo = resData.user;

        if (idCardFile) {
            return Promise.all([uploadAvatar(avatar, userInfo.id), uploadCard(idCardFile, userInfo.id)]);
        }
        return uploadAvatar(avatar, userInfo.id);
    }).then(res => { //TODO: need to fix saving avatar url after fix on API
        if (Array.isArray(res)) {
            userInfo = {...userInfo, avatarUrl: res[0].data.url, cardUrl: res[1].data.url}
        } else {
            userInfo = {...userInfo, avatarUrl: res.data.url}
        }
        dispatch(authSucceed(resData));
    }).catch(error => {
        console.log(error);
        dispatch(authFailed());
    });
};

export const login = ({email, password}) => dispatch => {
    dispatch(authRequested());
    axios({
        method: 'post',
        url: `${API_HOST}/api/auth/login`,
        data: {email, password}
    }).then(({data}) => {
        dispatch(authSucceed({...data}));
        window.location = "/my-profile";
    }).catch(error => {
        dispatch(authFailed());
    });
};