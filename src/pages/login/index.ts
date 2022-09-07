import Block from '../../utils/Block';
import template from './login.hbs';
import { Form } from '../../components/form';


interface LoginPageProps {
    inputs: Array<Record<string, string>>
}

export class LoginPage extends Block<LoginPageProps> {
    constructor(props: {}){
        super(props);
    }

    protected init(): void {
        const buttonText:string = 'Авторизоваться';
        const {inputs} = this.props;

        this.children.form = new Form ({
            class: 'form',
            inputs: inputs,
            buttonText: buttonText,
            buttonClass: 'button__login',
        });
    }

    render() {
        return this.compile(template, {
            class: 'login',
            title: 'Вход',
            linkHref: '/signin.html',
            linkText: 'Нет аккаунта?',
            linkClass: 'form__link',
            children: this.children,
        })
    }
}
