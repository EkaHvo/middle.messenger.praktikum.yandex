import Block from "../../utils/Block";
import template from './friendWrap.hbs';
import { Avatar } from '../avatar';

export class FriendWrap extends Block {
    protected init(): void {
        this.children.avatar = new Avatar({
            src: this.props.src,
        });
    }


    render() {
        return this.compile(template, {
            first_name: this.props.first_name,
            second_name: this.props.second_name,
            children: this.children,
        })
    }
}
