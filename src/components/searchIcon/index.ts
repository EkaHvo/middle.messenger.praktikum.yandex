import Block from "../../utils/Block";
import template from './searchIcon.hbs';

interface SearchIconProps {
    class?: string,
}

export class SearchIcon extends Block<SearchIconProps> {
    constructor(props:SearchIconProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class 
        })
    }
}
