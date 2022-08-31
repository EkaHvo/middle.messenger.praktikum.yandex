import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';

interface FriendInfoTopLineProps {
  class?: string,
}

export class FriendInfoTopLine extends Block {
  constructor(props:FriendInfoTopLineProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
      children: this.children,
    })
  }
}