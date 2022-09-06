import Block from "../../utils/Block";
import template from './addMessageModal.hbs';

interface AddMessageModalProps {}

export class AddMessageModal extends Block<AddMessageModalProps> {
    constructor(props:AddMessageModalProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            children: this.children,
        })
    }
}
