import Block from "../../utils/Block";
import template from './errorInput.hbs';

interface ErrorInputProps {
    errorText?: string,
}

export class ErrorInput extends Block<ErrorInputProps> {
    constructor(props:ErrorInputProps){
        super(props)
    }

    render() {
        return this.compile(template, {
            errorText: this.props.errorText
        })
    }
}
