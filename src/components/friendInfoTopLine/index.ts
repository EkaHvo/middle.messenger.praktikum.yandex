import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';
import  { DottesIcon } from '../dottesIcon';
import  { AddRemoveFriend } from '../addRemoveFriend';


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
                },
                {
                    class: 'button__cross_rotate',
                    text: 'Удалить пользователя',
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
            children: this.children,
        })
    }
}
