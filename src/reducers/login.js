'use strict';
import appConsts from  '../consts/appConsts.js'

const initialstate = {
    loginStatus:'NORMAL'};

function login(state = initialstate,action) {
    if(action.type == appConsts.login.sendingLoginRequest){
        let state1 = {
                ...state ,loginStatus:appConsts.login.sendingLoginRequest
            };
            return state1;
    }
    if (action.type == appConsts.login.loginSucceed){
        return {
            ...state ,loginStatus:appConsts.login.loginSucceed
        };
    }
    if(action.type == appConsts.login.loginFailed){
        return {
            ...state , loginStatus:appConsts.login.loginFailed
        }
    }
    if (action.type == appConsts.page.jumpToMainpage){
        return {
            ...state ,user:'testUser'
        }
    }
    return state;
}
export default login;
