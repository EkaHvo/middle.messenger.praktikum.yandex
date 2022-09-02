import Block from "../../utils/Block";
import template from './messageView.hbs';

interface messageProps {
  name: string,
  time: string, 
  text: string,
  messageCount?: string,
  avatar?: string,
}

export class MessageView extends Block {
  constructor(props:messageProps){
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