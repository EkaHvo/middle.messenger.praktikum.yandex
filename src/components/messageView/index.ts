import Block from "../../utils/Block";
import template from './messageView.hbs';


export class MessageView extends Block<Record<string, string>> {
    constructor(props:{}){
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
