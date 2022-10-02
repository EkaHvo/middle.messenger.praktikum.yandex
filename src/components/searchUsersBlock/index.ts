import Block from "../../utils/Block";
import template from './searchUsersBlock.hbs';

interface SearchUsersProps{
    users: []
}

export class SearchUsersBlock extends Block<SearchUsersProps> {
    constructor(props:SearchUsersProps){
        super(props)
    }

    protected render():DocumentFragment {
        return this.compile(template, {
            users: this.props.users,
            children: this.children,
        })
    }
}
