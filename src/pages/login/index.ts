import Block from '../../utils/Block';
import template from './login.hbs';
import { InputWrap } from "../../components/inputWrap";
import { Button } from "../../components/button";
import { SigninData} from '../../api/Auth-api';
import AuthController from '../../controllers/AuthController';

export class LoginPage extends Block{
    
    protected init(): void {
        this.children.button = new Button({
            buttonClass: 'button__login',
            buttonText: 'Авторизоваться',
            events: {
                click: (e: Event) => this.onSubmit(e),
            },
        });

        const inputs = [
            {type: "text",id: "login", name: "login", label: "Логин", value: '', errorText: "Неверный логин"},
            { type: "password", id: "password", name: "password", label: "Пароль", value: '', errorText: "Неверный пароль"},
        ];

        this.children.inputsBlock = inputs.map((input) => {

            const inputWrap:InputWrap = new InputWrap({
                type: input.type,
                id: input.id,
                name: input.name,
                label: input.label,
                value: input.value,
                errorText: input.errorText,
            });

            return inputWrap
        });
    }

    protected onSubmit(e: Event) {
        e.preventDefault();

        const values = Object
        .values(this.children.inputsBlock)
        .map((input:InputWrap) => ([((input as InputWrap).getInputName()),((input as InputWrap).getInputValue())]));

        const data = Object.fromEntries(values) as SigninData;

        console.log("formData: ", data)

        AuthController.signin(data);
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
