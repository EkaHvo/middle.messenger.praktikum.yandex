import Block from "../../utils/Block";
import template from './searchIcon.hbs';


export class SearchIcon extends Block<Record<string, string>> {
    constructor(props:{}){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class 
        })
    }
}
