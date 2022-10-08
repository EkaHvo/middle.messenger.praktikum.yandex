import Block from "../../utils/Block";
import template from './crossIcon.hbs';

interface CrossIconProps {
  class?: string,
}

export class CrossIcon extends Block<CrossIconProps> {

    render() {
        return this.compile(template, { 
            class: this.props.class
        })
    }
}
