import Block from "../../utils/Block";
import template from './friendChangeItem.hbs';
import { CrossIcon } from '../crossIcon';

interface FriendChangeItemProps {
    class?: string,
    text?: string,
    events?: {
        click: () => void,
    }
}

export class FriendChangeItem extends Block<FriendChangeItemProps> {

    protected init(): void {
        this.children.crossIcon = new CrossIcon({
            class: this.props.class,
        });
    }

    render() {
        return this.compile(template, { 
            text: this.props.text,
            children: this.children,
        })
    }
}
