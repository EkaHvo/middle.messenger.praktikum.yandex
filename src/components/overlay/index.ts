import Block from "../../utils/Block";
import template from './overlay.hbs';

interface OverlayProps {
    events?: {
        click: () => void,
    },
}

export class Overlay extends Block<OverlayProps> {
    render() {
        return this.compile(template, {})
    }
}
