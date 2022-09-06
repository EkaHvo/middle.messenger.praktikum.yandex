import Block from "../../utils/Block";
import template from './addRemoveFriend.hbs';

interface AddRemoveFriendProps {
    [key:string]: string | boolean
}

export class AddRemoveFriend extends Block<AddRemoveFriendProps> {
    constructor(props:AddRemoveFriendProps){
        super(props)
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
