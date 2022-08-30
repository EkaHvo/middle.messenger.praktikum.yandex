import Block from "../../utils/Block";
import template from './addMessageLine.hbs';
import { ClipIcon } from "../../components/clipIcon";
import { ArrowIcon } from "../../components/arrowIcon";

interface AddMessageLineProps {
  class?: string,
}

export class AddMessageLine extends Block {
  constructor(props:AddMessageLineProps){
    super('div', props)
  }

  protected init(): void {
    this.children.clipIcon = new ClipIcon({});
    this.children.arrowIcon = new ArrowIcon({});
  }

  render() {
    return this.compile(template, { 
      class: this.props.class,
    })
  }
}