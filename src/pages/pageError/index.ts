import Block from "../../utils/Block";
import template from './page_error.hbs';

interface PageErrorProps {
    [key:string]:string
}

export class PageError extends Block {
    constructor(props: PageErrorProps){
        super(props);
    }

    render() {
        return this.compile(template, {
            errorCode: this.props.errorCode,
            errorText: this.props.errorText,
        })
    }
}
