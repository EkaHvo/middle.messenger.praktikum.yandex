import Block from "../../utils/Block";
import template from './message.hbs';

interface MessageProps {
    isIincoming: boolean,
    text: string,
}

export class Message extends Block<MessageProps> {
  constructor(props:MessageProps){
        super(props)
  }

  render() {
    return this.compile(template, { 
        isIincoming: this.props.isIincoming, 
        text: this.props.text, 
    })
  }
}
