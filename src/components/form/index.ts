import Block from "../../utils/Block";
import template from "./form.hbs";
import { Button } from "../../components/button";
import { InputWrap } from "../../components/inputWrap";

interface FormProps {
    class: string;
    inputs: any;
    buttonText: string;
    buttonClass: string;
    events: {
        onSubmit: (data:any) => void,
    },
}

export class Form extends Block<FormProps> {
    constructor(props: FormProps) {
        super(props);
    }

    protected init(): void {
        this.children.button = new Button({
            buttonClass: this.props.buttonClass,
            buttonText: this.props.buttonText,
            events: {
                click: (e: Event) => {
                    e.preventDefault();

                    let formData:Record<string,string> = {};
                    Object.values(this.children.inputsBlock)
                    .forEach((input:InputWrap)=> {
                        formData[input.getInputName()] = input.getInputValue()
                    });

                    this.props.events.onSubmit(formData);
                },
            },
        });

        const { inputs } = this.props;

        if (inputs && Array.isArray(inputs)) {
            
            this.children.inputsBlock = inputs.map((input) => {

                const inputWrap:InputWrap = new InputWrap({
                    type: input.type,
                    id: input.id,
                    name: input.name,
                    label: input.label,
                    value: input.value,
                    errorText: input.errorText,
                    placeholder: input.placeholder,
                });

                return inputWrap
            });
        }
    }
    showButton(): void {
        this.children.button.show();
    }

    hideButton(): void {
        this.children.button.hide();
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
            children: this.children,
        });
    }
}
