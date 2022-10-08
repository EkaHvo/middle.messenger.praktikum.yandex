import Block from "../../utils/Block";
import template from './chat.hbs';
import { ChatData } from '../../interfaces/interfaces';
import { withStore } from '../../utils/Store';
import { Avatar } from '../avatar';

import { getDate } from '../../utils/helpers'

interface ChatProps extends ChatData{
    selectedChat: ChatData;
    events: {
        click: () => void
    }
}

export class ChatBase extends Block<ChatProps> {

    protected init(): void {
        this.children.avatarIcon = new Avatar ({
            src: this.props.avatar,
        });
    }

    protected render():DocumentFragment {
        return this.compile(template, { 
            ...this.props,
            time: this.props.last_message?.time ? getDate(this.props.last_message?.time, 'time'): '',
            isSelected: this.props.id === this.props.selectedChat?.id,
            children: this.children,
        })
    }
}


export const withSelectedChat = withStore((state) => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectChat)}))

export const Chat = withSelectedChat(ChatBase);
