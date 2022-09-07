import Block from "../../utils/Block";
import template from './inputLabel.hbs';


export class InputLabel extends Block<Record<string, string|boolean>> {
    constructor(props:{}){
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
