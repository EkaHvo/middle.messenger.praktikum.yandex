import Block from "../../utils/Block";
import template from "./avatar.hbs";

interface AvatarProps {
    class?: string;
    src?: string | null;
    events?: {
        click?: () => void;
    };
}

export class Avatar extends Block<AvatarProps> {
    
    static url:string = 'https://ya-praktikum.tech/api/v2/resources';

    constructor(props: AvatarProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
            src: this.props.src ? `${Avatar.url}${this.props.src}`: false,
            children: this.children,
        });
    }
}
