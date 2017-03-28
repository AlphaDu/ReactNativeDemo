import {observable, action, reaction, computed} from 'mobx'
import CONFIG from '../config.js'
import REQUEST_HEADER from '../common/HttpRequestHeader.js'
const loginUrl='voteLogin.json';
const LoginRefer='http://210.13.121.74:50001/vote/voteLogin.htm';
class UserStore {
    @observable user=null;
    @observable cookie='';
    @observable isRefreshing=false;
    @observable lastlLogineduser=null;
    @observable errorMsg='';
    @action sendLoginRequest=async (userName, password) => {
        try {
            const response=await this.fetchFromServer(userName, password);
            response.json();
        } catch (error) {
            this.errorMsg=error
        }
    };

    @action loginOut=() => {
        this.user=null;
        this.cookie='';
    };

    fetchFromServer (username, password) {
        console.log(CONFIG);
        console.log(Object.assign({}, REQUEST_HEADER, {Referer: LoginRefer}));
        fetch(CONFIG.host + loginUrl, {
            method: 'post',
            headers: Object.assign({}, REQUEST_HEADER, {Referer: LoginRefer}),
            body: 'username=' + username + '&password=' + password
        }).then(response => {
                return response.json()
            }
        ).then(responseData => {
            console.log(responseData)
        })
            .catch(error => console.log(error))
    }

    @computed  get isFetching () {

    }
}

const userStore=new UserStore();
export default  userStore;