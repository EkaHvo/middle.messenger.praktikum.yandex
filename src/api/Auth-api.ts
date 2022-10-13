import BaseAPI from "./Base-api";
import {User, SigninData, SignupData} from "../interfaces/interfaces";

export class AuthAPI extends BaseAPI {
  constructor(){
    super('/auth')
  }

  signin(data: SigninData){
    return this.http.post('/signin', data)
  }

  signup(data: SignupData):Promise<number>{
    return this.http.post('/signup', data)
  }

  logout(){
    return this.http.post('/logout')
  }

  getProfile():Promise<User>{
    return this.http.get('/user')
  }

  read:any = undefined;
  create:any = undefined;
  update:any = undefined;
  delete:any = undefined;
}

export default new AuthAPI();
