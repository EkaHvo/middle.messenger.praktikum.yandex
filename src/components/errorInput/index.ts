import Block from "../../utils/Block";
import template from './errorInput.hbs';

interface ErrorInputProps {
    errorText?: string,
}

export class ErrorInput extends Block<ErrorInputProps> {

    render() {
        return this.compile(template, {
            errorText: this.props.errorText
        })
    }
}
