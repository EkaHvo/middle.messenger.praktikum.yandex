import Block from '../../utils/Block';
import template from './login.hbs';
import { Form } from '../../components/form';
import { INPUTREGEXP } from '../../utils/regexpConstants';

interface inputsObj {
  [key:string]:string
}

const inputs:Array<inputsObj> = [
    { type: "text", id: "login", name: "login", label: "Логин", value: '', errorText: "Неверный логин", inputRegexp: INPUTREGEXP.login },
    { type: "password", id: "password", name: "password", label: "Пароль", value: '', errorText: "Неверный пароль", inputRegexp: INPUTREGEXP.password },
];

export class LoginPage extends Block {
    constructor(props: any){
        super(props);
    }

    protected init(): void {
        const buttonText:string = 'Авторизоваться';

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
