import Block from "../../utils/Block";
import template from './addMessageLine.hbs';
import { ClipIcon } from '../clipIcon';
import { AddMessageModal } from '../addMessageModal';


export class AddMessageLine extends Block {

    protected init(): void {

        this.children.clipIcon = new ClipIcon ({
            events: {
                click: () => this.onClick(),
            },
        });

        this.children.addMessageModal = new AddMessageModal({});
        this.children.addMessageModal.hide();
    }
  
    onClick(){
        const modal:HTMLElement|null = document.querySelector('.add-message__modal');
        if(modal){
            if(modal.style.display === 'none'){
                this.children.addMessageModal.show();
            } else {
                this.children.addMessageModal.hide();
            }
        }
    }

    render() {
        return this.compile(template, { 
            children: this.children,
        })
    }
}
