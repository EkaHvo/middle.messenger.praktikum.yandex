import Block from "../../utils/Block";
import template from './input.hbs';

interface InputProps {
  type?: string,
  id?: string,
  name?: string,
  placeholder?: string,
  readonly?: boolean,
  label?: string,
  errorText?: string,
  events?: {
    focusin?: () => void,
    focusout?: () => void,
  }
}

export class Input extends Block {
  constructor(props:InputProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      type: this.props.type, 
      id: this.props.id, 
      name: this.props.name, 
      placeholder: this.props.placeholder, 
      readonly: this.props.readonly, 
      label: this.props.label, 
      errorText: this.props.errorText, 
      events: this.props.events,
      children: this.children,
    })
  }
}