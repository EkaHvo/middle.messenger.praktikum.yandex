import Block from "../../utils/Block";
import template from './page_error.hbs';
import { Link } from "../../components/linkItem";
import Router from '../../utils/Router';

export class PageError500 extends Block {
    protected init(): void {
        this.children.link = new Link({
            class: 'error__link',
            label: 'Назад к чатам',
            events: {
                click: () => Router.go('/messenger'),
            },
        });
    }

    render() {
        return this.compile(template, {
            errorCode: "500",
            errorText: "Мы уже фиксим",
            children: this.children,
        })
    }
}
