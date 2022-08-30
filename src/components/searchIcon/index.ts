import Block from "../../utils/Block";
import template from './searchIcon.hbs';

interface searchIconProps {
  class?: string,
}

export class SearchIcon extends Block {
  constructor(props:searchIconProps){
    super('div', props)
  }

  render() {
    return this.compile(template, { class: this.props.class })
  }
}