import Block from '../../utils/Block';
import template from './signin.hbs';
import { InputWrap } from "../../components/inputWrap";
import { Button } from "../../components/button";
import { SigninData } from '../../interfaces/interfaces';
import { Link } from '../../components/linkItem';
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';

export class SignInPage extends Block{
    
    protected init(): void {

        this.children.button = new Button({
            buttonClass: 'button__login',
            buttonText: 'Авторизоваться',
            events: {
                click: (e: Event) => this.onSubmit(e),
            },
        });

        this.children.link = new Link({
            class: 'form__link',
            label: 'Нет аккаунта?',
            events: {
                click: () => Router.go('/sign-up'),
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
            AuthController.signin(data as SigninData);
        }

    }

    render() {
        return this.compile(template, {
            title: 'Вход',
            class: 'login',
            children: this.children,
        })
    }
}
