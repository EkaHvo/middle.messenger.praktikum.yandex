import Block from "../../utils/Block";
import template from './noPhotoIcon.hbs';


export class NoPhotoIcon extends Block<Record<string, string>> {
    constructor(props: {}){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class 
        })
    }
}
