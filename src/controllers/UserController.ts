import API, { UserAPI } from "../api/User-api";
import { User, SearchUserData, EditPass} from '../interfaces/interfaces';
import Router from "../utils/Router";
import store from "../utils/Store";

export class UserController{
  private readonly api:UserAPI;

  constructor() {
    this.api = API;
  }

  async editUser(data:User){
    try {
      await this.api.editUser(data);
      Router.go('/settings');
    } catch(e:any) {
      console.error(e);
    }
  }

  async editAvatar(data:any){
    try {
      const user = await this.api.editAvatar(data);
      store.set('user', user);
    } catch(e:any) {
      console.error(e);
    }
  }

  async editPass(data:EditPass){
    try {
      await this.api.editPass(data);
      Router.go('/settings');
    } catch(e:any) {
      console.error(e);
    }
  }

  async getUser(data: Number){
    try {
      await this.api.getUser(data);
      Router.go('/settings');
    } catch(e:any) {
      console.error(e);
    }
  }

  async searchUser(data:SearchUserData){
      const users = await this.api.searchUser(data);
      store.set('users', users);
  }

}

export default new UserController();
