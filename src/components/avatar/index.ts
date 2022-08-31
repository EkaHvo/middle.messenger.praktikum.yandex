import Block from "../../utils/Block";
import template from './avatar.hbs';

interface AvatarProps {
  class?: string,
  src?: string
}

export class Avatar extends Block {
  constructor(props:AvatarProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
      src: this.props.src,
      children: this.children,
    })
  }
}