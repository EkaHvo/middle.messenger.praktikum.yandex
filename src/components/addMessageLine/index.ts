import Block from "../../utils/Block";
import template from './addMessageLine.hbs';

interface AddMessageLineProps {
  class?: string,
  isActiveClip: boolean
}

export class AddMessageLine extends Block {
  constructor(props:AddMessageLineProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
      isActiveClip: this.props.isActiveClip,
      children: this.children,
    })
  }
}