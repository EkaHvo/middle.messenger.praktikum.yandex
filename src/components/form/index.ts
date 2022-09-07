import Block from "../../utils/Block";
import template from "./form.hbs";
import validate from "../../utils/validate";
import { Button } from "../../components/button";
import { InputWrap } from "../../components/inputWrap";

interface FormProps {
    class: string;
    inputs: any;
    buttonText: string;
    buttonClass: string;
}

export class Form extends Block<FormProps> {
    constructor(props: {}) {
        super(props);
    }

    protected init(): void {
        this.children.button = new Button({
            buttonClass: this.props.buttonClass,
            buttonText: this.props.buttonText,
            events: {
                click: (e: Event) => this.onClick(e),
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

    protected onClick(e: Event) {
        e.preventDefault();

        const inputs = this.children.inputsBlock;

        let formData: Record<string, string> = {};
        let isFormError: boolean = false;

        if (inputs && Array.isArray(inputs)) {
            inputs.forEach((element: InputWrap) => {
                const value = element.getInputValue();
                const name = element.getInputName();

                const isError: boolean = validate(value, name);
                isError ? (isFormError = true) : "";

                formData[name] = value;
            });
        }

        console.log("isFormError: ", isFormError);
        console.log("formData: ", formData);
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
            children: this.children,
        });
    }
}
