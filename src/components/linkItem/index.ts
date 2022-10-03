import Block from "../../utils/Block";
import template from './linkItem.hbs';

interface LinkProps{
    label: String,
    class?: String,
    events?: {
        click?: () => void,
    };
}

export class Link extends Block<LinkProps> {

    render() {
        return this.compile(template, {...this.props})
    }
}
