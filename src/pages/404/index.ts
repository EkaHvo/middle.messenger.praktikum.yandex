import Block from "../../utils/Block";
import template from './page_error.hbs';

export class PageError404 extends Block {
    
    render() {
        return this.compile(template, {
            errorCode: "404",
            errorText: "Не туда попали",
        })
    }
}
