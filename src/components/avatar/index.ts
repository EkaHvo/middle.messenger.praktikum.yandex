import Block from "../../utils/Block";
import template from './avatar.hbs';
import { NoPhotoIcon } from "../../components/noPhotoIcon";

interface AvatarProps {
  class?: string,
  src?: string
}

export class Avatar extends Block {
  constructor(props:AvatarProps){
    super('div', props)
  }

  protected init(): void {
    this.children.noPhotoIcon = new NoPhotoIcon({});
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
      src: this.props.src,
    })
  }
}