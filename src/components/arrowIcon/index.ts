import Block from "../../utils/Block";
import template from './arrowIcon.hbs';

interface ArrowIconProps {
    class?: string,
    events?: {
        click: () => void
    }
}

export class ArrowIcon extends Block<ArrowIconProps> {

    render() {
        return this.compile(template, { 
            class: this.props.class
        })
    }
}
