import Block from '../../utils/Block';
import template from './signin.hbs';
import { InputWrap } from "../../components/inputWrap";
import { Button } from "../../components/button";
import { SignupData } from '../../interfaces/interfaces';
import AuthController  from '../../controllers/AuthController';
import Router from '../../utils/Router';
import { Link } from '../../components/linkItem';


export class SigninPage extends Block {

    protected init(): void {

        this.children.button = new Button({
            buttonClass: 'button__signin',
            buttonText: 'Зарегистрироваться',
            events: {
                click: (e: Event) => this.onSubmit(e),
            },
        });

        this.children.link = new Link({
            class: 'form__link',
            label: 'Войти',
            events: {
                click: () => Router.go('/'),
            },
        });

        const inputs = [
                { type: "email", id: "email", name: "email", label: "Почта", errorText: "Неверная почта"},
                { type: "text", id: "login", name: "login", label: "Логин", errorText: "Неверный логин"},
                { type: "text", id: "first_name", name: "first_name", label: "Имя", errorText: "Неверное имя"},
                { type: "text", id: "second_name", name: "second_name", label: "Фамилия", errorText: "Неверная фамилия"},
                { type: "phone", id: "phone", name: "phone", label: "Телефон", errorText: "Введите телефон"},
                { type: "password", id: "password", name: "password", label: "Пароль", errorText: "Неверный пароль"},
                { type: "password", id: "password", name: "password", label: "Пароль (ещё раз)", errorText: "Пароли не совпадают"},
        ];

        this.children.inputsBlock = inputs.map((input) => {

            const inputWrap:InputWrap = new InputWrap({
                type: input.type,
                id: input.id,
                name: input.name,
                label: input.label,
                errorText: input.errorText,
            });

            return inputWrap
        });
    }

    protected onSubmit(e: Event) {
        e.preventDefault();

        let isError:Boolean = false;

        const values = Object
        .values(this.children.inputsBlock)
        .map((input:InputWrap) => {
            if((input as InputWrap).isInputValueValid()){
                isError = true;
            }
            return ([((input as InputWrap).getInputName()),((input as InputWrap).getInputValue())])
        });

        if(!isError){
            const data = Object.fromEntries(values);
            AuthController.signin(data as SignupData);
        }
    }
    
    render() {
        return this.compile(template, {
            class: 'signin',
            title: 'Регистрация',
            children: this.children,
        })
    }
}
