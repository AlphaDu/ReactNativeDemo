import appConsts from '../consts/appConsts.js';
let loginService = (userName,password) => (dispatch,getState) =>{
    dispatch(sendingLoginRequest());
    return mockLogin(5000,true)
        .then((res) => dispatch(loginSucceedAndJumpToMainPage()))
        .catch(() =>dispatch(loginFailed()))
};
function login(userName,password) {
    return{
        type:appConsts.login.sendLoginRequest,
        userName,
        password
    }
}
function sendingLoginRequest(value){
    return {
        type:appConsts.login.sendingLoginRequest
    }
}
function loginSucceed() {
    return {
        type:appConsts.login.loginSucceed
    }
}
let loginSucceedAndJumpToMainPage =  (user)  => (dispatch,state) =>{
    dispatch(loginSucceed());
    setTimeout(()=>{
       return dispatch(jumpToMainPage(user));
    },1000 );
};
function jumpToMainPage(user){
    return {
        type:appConsts.page.jumpToMainpage,
        user:'TESTS'
    }
}
function loginFailed() {
    return {
        type:appConsts.login.loginFailed
    }
}
let mockLogin =  (ms,status) =>{
    return new Promise(
        (resolve,reject) =>{
            if(status == true){
                setTimeout(resolve, ms, 'done');
            }else{
                setTimeout(reject, ms, 'fail');
            }
        }
    );
};
const loginSuccess = ()=>{};
const loginFfailed = ()=>{};
export default
    loginService

