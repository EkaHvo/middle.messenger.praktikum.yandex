import Block from "../../utils/Block";
import template from './input.hbs';

interface InputProps {
    events?: {
        focus: () => void,
        blur: (e:Event) => void,
        change?: (e:Event) => void,
    },
    class?: string, 
    type?: string, 
    id?: string, 
    name?: string, 
    placeholder?: string,
    readonly?: boolean,
    value?: string,
}

export class Input extends Block<InputProps> {
    constructor(props:InputProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class, 
            type: this.props.type, 
            id: this.props.id, 
            name: this.props.name, 
            placeholder: this.props.placeholder,
            readonly: this.props.readonly,
            value: this.props.value,
            events: this.props.events,
        })
    }
}
