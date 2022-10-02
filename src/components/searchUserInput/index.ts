import Block from "../../utils/Block";
import template from './searchUserInput.hbs';
import { InputProps } from '../../interfaces/interfaces';
import { Input } from "../input";


export class SearchUserInput extends Block<InputProps> {
    constructor(props:InputProps){
        super(props)
    }

    protected init(): void {
        this.children.input = new Input({
            class: "search__input",
            type: "text",
            name: "search__input",
            id: "search__input",
            events: this.props.events
        });
    }

    render() {
        return this.compile(template, { 
            children: this.children,
        })
    }
}
