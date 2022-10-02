import Block from "../../utils/Block";
import template from './overlay.hbs';

interface OverlayProps {
    events?: {
        click: () => void,
    },
}

export class Overlay extends Block<OverlayProps> {
    constructor(props: OverlayProps){
        super(props)
    }

    render() {
        return this.compile(template, {})
    }
}
