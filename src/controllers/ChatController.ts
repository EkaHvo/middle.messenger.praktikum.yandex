import API, { ChatAPI } from "../api/Chat-api";
import store from "../utils/Store";
import { ChatUserData, ChatData } from '../interfaces/interfaces';
import MessegesController from "./MessegesController";

class ChatController{
    private readonly api:ChatAPI;

    constructor() {
        this.api = API;
    }

    async getChats(){
        const chats = await this.api.read();
        chats.map(async(chat: ChatData) => {
            const token = await this.getToken(chat.id);

            await MessegesController.connect(chat.id, token)
        });

        store.set('chats', chats);
    }

    async createChat(title:string){
        await this.api.create(title);
        this.getChats();
    }

    async addChatUser(data: ChatUserData){
        await this.api.addChatUser(data);
    }

    async removeChatUser(data: ChatUserData){
        await this.api.removeChatUser(data);
    }
    async removeChat(data: number){
        await this.api.delete(data);
        this.getChats();
    }

    async getChatUsers(chatId: number){
        return this.api.getChatUsers(chatId);
    }

    async getToken(chatId: number){
        return this.api.getToken(chatId)
    }

    async selectChat(id: number){
        const users = await this.api.getChatUsers(id);
        store.set('selectedChatUsers', users);
        store.set('selectedChat', id);
    }

}


export default new ChatController();
