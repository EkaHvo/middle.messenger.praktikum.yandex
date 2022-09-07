import Block from "../../utils/Block";
import template from './dottesIcon.hbs';

interface DottesIconProps {
    class?: string,
    events: {
        click: () => void,
    }
}

export class DottesIcon extends Block<DottesIconProps> {
    constructor(props:{}){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class
        })
    }
}
