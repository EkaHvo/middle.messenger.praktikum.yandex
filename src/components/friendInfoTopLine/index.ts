import Block from "../../utils/Block";
import template from './friendInfoTopLine.hbs';
import { Avatar } from "../../components/avatar";
import { DottesIcon } from "../../components/dottesIcon";

interface FriendInfoTopLineProps {
  class?: string,
}

export class FriendInfoTopLine extends Block {
  constructor(props:FriendInfoTopLineProps){
    super('div', props)
  }

  protected init(): void {
    this.children.avatar = new Avatar({});
    this.children.dottesIcon = new DottesIcon({});
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
    })
  }
}