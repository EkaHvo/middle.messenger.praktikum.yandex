import Block from "../../utils/Block";
import template from './clipIcon.hbs';

interface ClipIconProps {
    class?: string,
    events: {
        click: () => void,
    },
}

export class ClipIcon extends Block<ClipIconProps> {
    constructor(props:{}){
        super(props)
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
        })
    }
}
