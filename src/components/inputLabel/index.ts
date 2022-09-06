import Block from "../../utils/Block";
import template from './inputLabel.hbs';

interface InputLabelProps {
    label?: string,
    id?: string,
    isActive?: boolean,
    classActive?: string,
}

export class InputLabel extends Block<InputLabelProps> {
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
