import Block from "../../utils/Block";
import template from './crossIcon.hbs';

interface CrossIconProps {
  class?: string,
}

export class CrossIcon extends Block<CrossIconProps> {
    constructor(props:CrossIconProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class
        })
    }
}
