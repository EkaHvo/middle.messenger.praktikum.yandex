import Block from "../../utils/Block";
import template from './chatsList.hbs';
import { Chat } from '../chat';
import { withStore } from '../../utils/Store';
import { ChatData } from '../../interfaces/interfaces';
import ChatController from "../../controllers/ChatController";

interface ChatsProps {
    events?: {
        click: (e:Event) => void,
    },
    chats: ChatData[],
    isLoaded: boolean
}

class ChatsListBase extends Block<ChatsProps> {
    constructor(props:ChatsProps){
        super({...props})
    }

    protected init(): void {
        this.children.chats = this.createChats(this.props);
    }

    protected componentDidUpdate(oldProps: ChatsProps, newProps: ChatsProps):boolean {
        this.children.chats = this.createChats(newProps);
        return true;
    }

    private createChats(props: ChatsProps) {
        return props.chats.map(data => {
            return new Chat({
                ...data,
                events: {
                    click: ()=> {
                        ChatController.selectChat(data.id)
                    }
                }
            });
        })
    }

    render() {
        return this.compile(template, { 
            isLoaded: this.props.isLoaded,
            children: this.children
        })
    }
}

const withChats = withStore((state) => ({chats: state.chats || [] }))

export const ChatsList = withChats(ChatsListBase);
