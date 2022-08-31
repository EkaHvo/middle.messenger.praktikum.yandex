import Block from "../../utils/Block";
import template from './input.hbs';

interface inputProps {
  type?: string,
  id?: string,
  name?: string,
  placeholder?: string,
  readonly?: boolean,
  label?: string,
  errorText?: string,
}

export class Input extends Block {
  constructor(props:inputProps){
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
    })
  }
}