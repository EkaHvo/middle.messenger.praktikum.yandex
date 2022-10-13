import BaseAPI from './Base-api';
import { User, SearchUserData, EditPass} from '../interfaces/interfaces';

export class UserAPI extends BaseAPI {
    constructor(){
        super('/user')
    }

    editUser(data: User){
        return this.http.put('/profile', data)
    }

    editAvatar(avatar: any){
        return this.http.put('/profile/avatar', avatar)
    }

    editPass(data: EditPass){
        return this.http.put('/password', data);
    }
    
    getUser(data: Number){
        return this.http.post(`/${data}`)
    }

    searchUser(data: SearchUserData){
        return this.http.post('/search', data)
    }


    read:any = undefined;
    create:any = undefined;
    update:any = undefined;
    delete:any = undefined;
}

export default new UserAPI();
