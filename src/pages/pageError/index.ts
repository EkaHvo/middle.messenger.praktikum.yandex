import Block from "../../utils/Block";
import template from './page_error.hbs';

interface PageErrorProps {
    errorCode?: string
    errorText?: string,
}

export class PageError extends Block<PageErrorProps> {
    constructor(props: {}){
        super(props);
    }

    render() {
        return this.compile(template, {
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        })
    }
}
