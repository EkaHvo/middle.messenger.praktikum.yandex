import Block from "../../utils/Block";
import template from './main_chat.hbs';
import { Link } from '../../components/linkItem';
import { Messenger } from '../../components/messenger';
import { Button } from '../../components/button';
import { SearchUserInput } from "../../components/searchUserInput";
import { SearchUsersBlock } from "../../components/searchUsersBlock";
import { ChatsList } from "../../components/chatsList";
import Router from '../../utils/Router';
import ChatController from "../../controllers/ChatController";
import UserController from "../../controllers/UserController";

import store from "../../utils/Store";

export class MainChatPage extends Block {
    
    protected init(): void {

        this.children.addChatButton = new Button({
            buttonClass: 'button__addchat',
            buttonText: 'Добавить чат',
            events: {
                click: () => {
                    const title:string|null = prompt('Введете название чата', 'Moй чат');
                    if(title){
                        ChatController.createChat(title);
                    }
                    
                }
            }
        });

        this.children.removeChatButton = new Button({
            buttonClass: 'button__removechat',
            buttonText: 'Удалить чат',
            events: {
                click: () => {
                    const id:string|null = prompt('Введете ID чата', '100');
                    if(id){
                        ChatController.removeChat(+id);
                    }
                }
            }
        });

        this.children.link = new Link({
            class: 'toprofile',
            label: 'Профиль',
            events: {
                click: ()=> Router.go('/settings'),
            },
        });

        this.children.searchUserInput = new SearchUserInput({
            events: {
                input: (e:Event) => this.onLoadSearch(e),
                blur: (e:Event) => this.children.searchBlock.hide()
            },
        });

        this.children.searchBlock = new SearchUsersBlock({
            users: []
        });
        this.children.searchBlock.hide();

        this.children.chatsList = new ChatsList({isLoaded: false});

        this.children.messenger = new Messenger({});

        ChatController.getChats().finally(() => {
            (this.children.chatsList as Block).setProps({
                isLoaded: true
            })
        })
    }

    async onLoadSearch(e: Event){
        e.stopPropagation();

        let el = e.target as HTMLInputElement;
        let value:string = el!.value;
        await UserController.searchUser({'login': value});
        const state = store.getState();

        if(state.users!.length > 0){
            this.children.searchBlock.show();
            this.children.searchBlock.setProps({
                users: state.users
            })
        } else {
            this.children.searchBlock.setProps({
                users: []
            })
            this.children.searchBlock.hide();
        }
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
