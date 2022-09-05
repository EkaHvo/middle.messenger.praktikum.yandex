import Block from "../../utils/Block";
import template from './signin.hbs';
import {InputWrap} from '../../components/inputWrap';
import { INPUTREGEXP } from '../../utils/regexpConstants';

interface signinInputsObj {
    [key:string]:string
}
interface SigninPageProps {
    signinInputs: Array<signinInputsObj>
}

export class SigninPage extends Block {
    constructor(props: SigninPageProps){
        super(props);
    }

    protected init(): void {

        this.children.emailInput = new InputWrap ({
            type: "email",
            id: "email",
            name: "email",
            label: "Почта",
            errorText: "Неверная почта",
            inputRegexp: INPUTREGEXP.email,
        })

        this.children.loginInput = new InputWrap ({
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            errorText: "Неверный логин",
            inputRegexp: INPUTREGEXP.login,
        })

        this.children.firstNameInput = new InputWrap ({
            type: "text",
            id: "first_name",
            name: "first_name",
            label: "Имя",
            errorText: "Неверное имя",
            inputRegexp: INPUTREGEXP.first_name,
        })

        this.children.secondNameInput = new InputWrap ({
            type: "text",
            id: "second_name",
            name: "second_name",
            label: "Фамилия",
            errorText: "Неверная фамилия",
            inputRegexp: INPUTREGEXP.second_name,
        })

        this.children.phoneInput = new InputWrap ({
            type: "phone",
            id: "phone",
            name: "phone",
            label: "Телефон",
            errorText: "Введите телефон",
            inputRegexp: INPUTREGEXP.phone,
        })

        this.children.passwordInput = new InputWrap ({
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль",
            errorText: "Неверный пароль",
            inputRegexp: INPUTREGEXP.password,
        })

        this.children.passwordDblInput = new InputWrap ({
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль (ещё раз)",
            errorText: "Пароли не совпадают",
            inputRegexp: INPUTREGEXP.passwordDbl,
        })
    }
    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}