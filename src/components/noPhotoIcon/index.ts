import Block from "../../utils/Block";
import template from './noPhotoIcon.hbs';

interface noPhotoIconProps {
    class?: string,
}

export class NoPhotoIcon extends Block<noPhotoIconProps> {
    constructor(props: noPhotoIconProps){
        super(props)
    }

    render() {
        return this.compile(template, { 
            class: this.props.class 
        })
    }
}
