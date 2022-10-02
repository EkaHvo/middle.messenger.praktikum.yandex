import API, { AuthAPI} from "../api/Auth-api";
import { SigninData, SignupData } from '../interfaces/interfaces';
import Router from "../utils/Router";
import store from "../utils/Store";

export class AuthController{
  private readonly api:AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData){
    try {
      await this.api.signin(data);

      await this.fetchUser();

      Router.go('/messenger');
    } catch(e: any) {
      console.error(e)
    }
  }

  async signup(data: SignupData){
    try {
      await this.api.signup(data);

      await this.fetchUser();
      
      Router.go('/messenger');
    } catch(e: any) {
      console.error(e)
    }
  }

  async fetchUser(){
      const user = await this.api.getProfile();
      store.set('user', user);
  }

  async logout(){
    try {
      await this.api.logout();

      Router.go('/');
    } catch(e: any) {
      console.error(e)
    }
  }
}

export default new AuthController();

