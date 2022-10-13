import BaseAPI from './Base-api';
import { ChatUserData, ChatData  } from '../interfaces/interfaces';

export class ChatAPI extends BaseAPI {
    constructor(){
        super('/chats')
    }

    read():Promise<ChatData[]>{
        return this.http.get('/')
    }

    create(title:string){
        return this.http.post(`/`, {title: title})
    }

    addChatUser(data: ChatUserData){
        return this.http.put(`/users`, data)
    }

    removeChatUser(data: ChatUserData){
        return this.http.delete(`/users`, data)
    }

    delete(id: number){
        return this.http.delete(`/`, { chatId:id });
    }

    async getChatUsers(chatId: number){
        const response = await this.http.get(`/${chatId}/users`)
        return response;
    }

    async getToken(chatId: number):Promise<string>{
        const response = await this.http.post<{token:string}>(`/token/${chatId}`)
        return response.token;
    }

    update:any = undefined;
}

export default new ChatAPI();
