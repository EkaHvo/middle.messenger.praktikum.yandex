import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';
import  { DottesIcon } from '../dottesIcon';
import  { AddRemoveFriend } from '../addRemoveFriend';
import ChatController from "../../controllers/ChatController";

export class FriendInfoTopLine extends Block {
    protected init(): void {
        this.children.dottesIcon = new DottesIcon ({
            class: '',
            events: {
                click: () => this.toggleModal(),
            },
        });

        this.children.addRemoveFriend = new AddRemoveFriend ({
            modalItems: [
                {
                    text: 'Добавить пользователя',
                    events: {
                        click: () => {
                            let addedUserId:string|null = prompt('Введите id пользователя для его добавления', '');
                            if(addedUserId){
                                ChatController.addChatUser({
                                    chatId: this.props.selectedChat!,
                                    users: [+addedUserId]
                                })
                            }
                        }
                        
                    },
                },
                {
                    class: 'button__cross_rotate',
                    text: 'Удалить пользователя',
                    events: {
                        click: () => {
                            let removedUserId:string|null = prompt('Введите id пользователя для его удаления', '')
                            if(removedUserId){
                                ChatController.removeChatUser({
                                    chatId: this.props.selectedChat!,
                                    users: [+removedUserId]
                                })
                            }
                        },
                    },
                },
            ]
        });
        this.children.addRemoveFriend.hide();
    }

    toggleModal(){
        const modal:HTMLElement|null = document.querySelector('.friend__change-modal');

        if(modal){
            if(modal.style.display === 'none'){
                this.children.addRemoveFriend.show()
            } else {
                this.children.addRemoveFriend.hide();
            }
        }
    }

    render() {
        return this.compile(template, {
            selectedChatUsers: this.props.selectedChatUsers,
            userId: this.props.userId,
            children: this.children,
        })
    }
}
