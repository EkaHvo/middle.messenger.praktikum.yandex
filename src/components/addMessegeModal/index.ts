import Block from "../../utils/Block";
import template from './addMessegeModal.hbs';

export class AddMessegeModal extends Block {

    render() {
        return this.compile(template, { 
            children: this.children,
        })
    }
}
