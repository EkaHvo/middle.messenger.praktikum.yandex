import Block from "../../utils/Block";
import template from './inputLabel.hbs';

interface InputLabelProps {
  [key:string]:string | boolean
}

export class InputLabel extends Block {
  constructor(props:InputLabelProps){
    super(props)
  }

  render() {
    return this.compile(template, { 
      label: this.props.label,
      id: this.props.id,
      isActive: this.props.isActive,
      classActive: this.props.classActive,
    })
  }
}


