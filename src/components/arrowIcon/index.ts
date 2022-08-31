import Block from "../../utils/Block";
import template from './arrowIcon.hbs';

interface ArrowIconProps {
  class?: string,
}

export class ArrowIcon extends Block {
  constructor(props:ArrowIconProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class
    })
  }
}