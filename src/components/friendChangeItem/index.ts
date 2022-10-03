import Block from "../../utils/Block";
import template from './friendChangeItem.hbs';

interface FriendChangeItemProps {
    class?: string,
    text?: string,
    events?: {
        click: () => void,
    }
}

export class FriendChangeItem extends Block<FriendChangeItemProps> {

    render() {
        return this.compile(template, { 
            class: this.props.class,
            text: this.props.text,
            children: this.children,
        })
    }
}
