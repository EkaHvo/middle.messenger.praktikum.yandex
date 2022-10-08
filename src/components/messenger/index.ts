import Block from "../../utils/Block";
import template from './messenger.hbs';
import MessegesController from "../../controllers/MessegesController";
import { Messege, User } from '../../interfaces/interfaces';
import { withStore } from "../../utils/Store";
import { FriendInfoTopLine } from '../friendInfoTopLine';
import { ClipIcon } from '../clipIcon';
import { AddMessegeModal } from '../addMessegeModal';
import { Input } from '../input';
import { ArrowIcon } from '../arrowIcon';
import { MessegeItem } from '../messegeItem';


interface MessengerProps {
    selectedChat: number | undefined;
    messeges: Messege[] | [];
    userId: number,
    selectedChatUsers: User[] | [],
}

class MessengerBase extends Block<MessengerProps> {
    
    protected init(): void {

        this.children.messeges = this.createMesseges(this.props);
        
        this.children.friendInfoTopLine = new FriendInfoTopLine({
            selectedChat: this.props.selectedChat,
            selectedChatUsers: this.props.selectedChatUsers,
            userId: this.props.userId,
        });

        this.children.clipIcon = new ClipIcon ({
            events: {
                click: () => this.onClick(),
            },
        });

        this.children.input = new Input ({
            class: 'add-messege__input',
            name: 'messege',
            type: "text",
            placeholder: "Сообщение",
        });

        this.children.button = new ArrowIcon({
            class:'button__arrow_right',
            events: {
                click: () => {

                    const input = this.children.input as Input;
                    const messege = input.getValue();
                    input.setValue('');
                    MessegesController.sendMessege(this.props.selectedChat!, messege)
                }
            },
        });

        this.children.addMessegeModal = new AddMessegeModal({});
        this.children.addMessegeModal.hide();

    }

    onClick(){
        const modal:HTMLElement|null = document.querySelector('.add-messege__modal');
        if(modal){
            if(modal.style.display === 'none'){
                this.children.addMessegeModal.show();
            } else {
                this.children.addMessegeModal.hide();
            }
        }
    }

    protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
        this.children.messeges = this.createMesseges(newProps);
        this.children.friendInfoTopLine = new FriendInfoTopLine({
            selectedChat: newProps.selectedChat,
            selectedChatUsers: newProps.selectedChatUsers,
            userId: newProps.userId,
        });
        return true;
    }

    private createMesseges(props: MessengerProps) {
        return props.messeges.map(data => {
            return new MessegeItem({
                ...data, 
                isIncoming: props.userId !== data.user_id
            });
        })
    }

    render() {
        return this.compile(template, {
            selectedChat: this.props.selectedChat,
            children: this.children,
        })
    }
}

const withSelectedChatMesseges = withStore(state => {
    const selectedChatId = state.selectedChat;

    if(!selectedChatId){
        return { 
            messeges: [],
            selectedChat: undefined,
            selectedChatUsers: [],
            userId: state.user.id,
        };
    }

    return { 
        messeges: (state.messeges || {})[selectedChatId] || [],
        selectedChat: state.selectedChat,
        selectedChatUsers: state.selectedChatUsers,
        userId: state.user.id,
    };
})

export const Messenger = withSelectedChatMesseges(MessengerBase);
