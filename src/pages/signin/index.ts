import Block from '../../utils/Block';
import template from './signin.hbs';
import { Form } from '../../components/form';
import { INPUTREGEXP } from '../../utils/regexpConstants';

interface inputsObj {
  [key:string]:string
}

const inputs:Array<inputsObj> = [
    {type: "email", id: "email", name: "email", label: "Почта", errorText: "Неверная почта", inputRegexp: INPUTREGEXP.email },
    { type: "text", id: "login", name: "login", label: "Логин", errorText: "Неверный логин", inputRegexp: INPUTREGEXP.login },
    { type: "text", id: "first_name", name: "first_name", label: "Имя", errorText: "Неверное имя", inputRegexp: INPUTREGEXP.first_name },
    { type: "text", id: "second_name", name: "second_name", label: "Фамилия", errorText: "Неверная фамилия", inputRegexp: INPUTREGEXP.second_name },
    { type: "phone", id: "phone", name: "phone", label: "Телефон", errorText: "Введите телефон", inputRegexp: INPUTREGEXP.phone },
    { type: "password", id: "password", name: "password", label: "Пароль", errorText: "Неверный пароль", inputRegexp: INPUTREGEXP.password },
    { type: "password", id: "password", name: "password", label: "Пароль (ещё раз)", errorText: "Пароли не совпадают", inputRegexp: INPUTREGEXP.passwordDbl },
];

export class SigninPage extends Block {
    constructor(props: any){
        super(props);
    }


    protected init(): void {
        const buttonText:string = 'Зарегистрироваться';

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
