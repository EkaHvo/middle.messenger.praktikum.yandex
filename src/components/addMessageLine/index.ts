import Block from "../../utils/Block";
import template from './addMessageLine.hbs';

interface AddMessageLineProps {
  class?: string,
}

export class AddMessageLine extends Block {
  constructor(props:AddMessageLineProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
      children: this.children,
    })
  }
}