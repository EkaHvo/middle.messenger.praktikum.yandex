import Block from "../../utils/Block";
import template from './message.hbs';

interface messageProps {
  isIincoming: boolean,
  text: string,
}

export class Message extends Block {
  constructor(props:messageProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      isIincoming: this.props.isIincoming, 
      text: this.props.text, 
    })
  }
}