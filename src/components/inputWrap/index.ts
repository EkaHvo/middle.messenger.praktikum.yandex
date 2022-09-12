import Block from "../../utils/Block";
import template from './inputWrap.hbs';
import {Input} from '../input';
import validate from "../../utils/validate";
import { InputLabel } from '../inputLabel';
import { ErrorInput } from '../errorInput';

interface InputWrapProps {
    events?: {
        focus: () => void,
        blur: (e:Event) => void,
    },
    type?: string, 
    id?: string, 
    name?: string, 
    placeholder?: string,
    readonly?: boolean,
    value?: string,
    label: string,
    errorText: string,
}

export class InputWrap extends Block<InputWrapProps> {
    constructor(props: InputWrapProps){
        super(props)
    }

    protected init(): void {
        this.children.input = new Input ({
            type: this.props.type, 
            id: this.props.id, 
            name: this.props.name, 
            placeholder: this.props.placeholder, 
            readonly: this.props.readonly,
            value: this.props.value,
            events: {
                focus: () => this.onFocus(),
                blur: (e:Event) => this.onBlur(e),
            },
        })

        this.children.label = new InputLabel ({
            id: this.props.id, 
            label: this.props.label, 
            isActive: !!this.props.value,
            classActive: 'label_active',
        })

        this.children.error = new ErrorInput ({
            errorText: this.props.errorText,
        })

        this.children.error.hide();
    }

    getInputValue(){
        let input:HTMLInputElement = (this.children.input.element as HTMLInputElement);
        return input.value;
    }

    getInputName(){
        let input:HTMLInputElement = (this.children.input.element as HTMLInputElement);
        return input.name;
    }

    protected onFocus():void {
        this.children.label.setProps({
            isActive: true,
        });
    }

    protected onBlur(e:Event):void {
        const inputValue:string = (e.target as HTMLInputElement).value;
        const inputName:string = (e.target as HTMLInputElement).name;

        if(!inputValue){
            this.children.label.setProps({isActive: false});
            this.children.error.hide();
            return
        }

        this.children.label.setProps({
            isActive: true,
        });

        let isError:boolean = validate(inputValue, inputName);

        if(isError){
            this.children.error.show();
        } else {
            this.children.error.hide();
        }
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
