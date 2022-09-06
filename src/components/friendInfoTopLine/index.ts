import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';
import  { DottesIcon } from '../dottesIcon';
import  { AddRemoveFriend } from '../addRemoveFriend';

interface FriendInfoTopLineProps {}

export class FriendInfoTopLine extends Block<FriendInfoTopLineProps> {
    constructor(props:FriendInfoTopLineProps){
        super(props)
    }

    protected init(): void {

        this.children.dottesIcon = new DottesIcon ({
            class: '',
            events: {
            click: () => this.onClick(),
            },
        });

        this.children.addRemoveFriend = new AddRemoveFriend ({});
        this.children.addRemoveFriend.hide();
    }

    onClick(){
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
