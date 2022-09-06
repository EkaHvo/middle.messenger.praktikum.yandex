import Block from "../../utils/Block";
import template from './messageView.hbs';

interface MessageProps {
    name: string,
    time: string, 
    text: string,
    messageCount?: string,
    avatar?: string,
}

export class MessageView extends Block<MessageProps> {
    constructor(props:MessageProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            name: this.props.name,
            time: this.props.time, 
            text: this.props.text,
            messageCount: this.props.messageCount,
            avatar: this.props.avatar,
            children: this.children,
        })
    }
}
