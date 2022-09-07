import Block from '../../utils/Block';
import template from './signin.hbs';
import { Form } from '../../components/form';

interface SigninPageProps {
    inputs:Array<Record<string, string>>
}

export class SigninPage extends Block<SigninPageProps> {
    constructor(props: {}){
        super(props);
    }

    protected init(): void {
        const buttonText:string = 'Зарегистрироваться';
        const {inputs} = this.props;

        this.children.form = new Form ({
            class: 'form',
            inputs: inputs,
            buttonText: buttonText,
            buttonClass: 'button__signin',
        });
    }

    render() {
        return this.compile(template, {
            class: 'signin',
            title: 'Регистрация',
            linkHref: '#',
            linkText: 'Войти',
            linkClass: 'form__link',
            children: this.children,
        })
    }
}
