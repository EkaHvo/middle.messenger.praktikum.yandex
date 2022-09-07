import Block from "../../utils/Block";
import template from './message.hbs';


export class Message extends Block<Record<string, string|boolean>> {
  constructor(props:{}){
        super(props)
  }

  render() {
    return this.compile(template, { 
        isIncoming: this.props.isIncoming, 
        text: this.props.text, 
        time: this.props.time, 
    })
  }
}
