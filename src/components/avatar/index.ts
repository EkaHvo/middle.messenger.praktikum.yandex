import Block from "../../utils/Block";
import template from "./avatar.hbs";

interface AvatarProps {
    class?: string;
    src?: string;
    events?: {
        click?: () => void;
    };
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
            src: this.props.src,
            children: this.children,
        });
    }
}
