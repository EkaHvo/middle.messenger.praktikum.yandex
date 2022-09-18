import Block from "../../utils/Block";
import template from './page_error.hbs';

export class PageError500 extends Block {

    render() {
        return this.compile(template, {
            errorCode: "500",
            errorText: "Мы уже фиксим",
        })
    }
}
