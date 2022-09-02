import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';

interface FriendInfoTopLineProps {
  class?: string,
  isActiveTopLine?: boolean,
}

export class FriendInfoTopLine extends Block {
  constructor(props:FriendInfoTopLineProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      isActiveTopLine: this.props.isActiveTopLine,
      class: this.props.class,
      children: this.children,
    })
  }
}