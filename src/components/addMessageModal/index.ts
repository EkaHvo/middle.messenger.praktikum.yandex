import Block from "../../utils/Block";
import template from './addMessageModal.hbs';

export class AddMessageModal extends Block {

    render() {
        return this.compile(template, { 
            children: this.children,
        })
    }
}
