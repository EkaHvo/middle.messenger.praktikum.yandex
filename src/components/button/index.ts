import Block from "../../utils/Block";
import template from './button.hbs';

interface ButtonProps {
  text: string,
}

export class Button extends Block {
  constructor(props:ButtonProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      text: this.props.text
    })
  }
}