import Block from "../../utils/Block";
import template from './linkItem.hbs';

interface LinkItemProps {
    class?: string,
    linkText?: string,
    events: {
        click: () => void,
    }
}

export class LinkItem extends Block<LinkItemProps> {
    constructor(props:LinkItemProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class,
            linkText: this.props.linkText,
        })
    }
}
