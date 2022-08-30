import Block from "../../utils/Block";
import template from './clipIcon.hbs';

interface ClipIconProps {
  class?: string,
}

export class ClipIcon extends Block {
  constructor(props:ClipIconProps){
    super('svg', props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class
    })
  }
}