import {observable,action,reaction,computed} from 'mobx'
class RootStore {
  @observable user = null;
  @observable isFetching = false;
  @observable lastlLogineduser = null;
  @computed
    get isFetching (){

}
}