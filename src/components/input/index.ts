import Block from "../../utils/Block";
import template from './input.hbs';
import {InputProps } from '../../interfaces/interfaces';


export class Input extends Block<InputProps> {

    getValue(){
        return (this.element as HTMLInputElement).value;
    }

    setValue(value:string){
        return (this.element as HTMLInputElement).value = value;
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
        })
    }
}
