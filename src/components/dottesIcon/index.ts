import Block from "../../utils/Block";
import template from './dottesIcon.hbs';

interface DottesIconProps {
  class?: string,
}

export class DottesIcon extends Block {
  constructor(props:DottesIconProps){
    super('svg', props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class
    })
  }
}