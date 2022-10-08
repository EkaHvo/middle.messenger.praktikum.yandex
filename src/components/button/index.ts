import Block from "../../utils/Block";
import template from './button.hbs';

interface ButtonProps {
    buttonClass?: string,
    buttonText: string,
    events?: {
        click: (e:Event) => void
    }
}

export class Button extends Block<ButtonProps> {

    render() {
        return this.compile(template, { 
            buttonClass: this.props.buttonClass,
            buttonText: this.props.buttonText,
        })
    }
}
