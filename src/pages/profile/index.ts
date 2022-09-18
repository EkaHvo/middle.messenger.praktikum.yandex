import Block from "../../utils/Block";
import template from './profile.hbs';
import {Avatar} from '../../components/avatar';
import { LinkItem } from '../../components/linkItem';
import { Form } from '../../components/form';

const inputs = [
    { type: "email",id: "email",name: "email",label: "Почта",errorText: "Неверная почта", placeholder: "pochta@yandex.ru"},
    { type: "text", id: "login", name: "login", label: "Логин", errorText: "Неверный логин", placeholder: "ivanivanov",},
    { type: "text", id: "first_name", name: "first_name", label: "Имя", errorText: "Неверное имя", placeholder: "Иван",},
    { type: "text", id: "second_name", name: "second_name", label: "Фамилия", errorText: "Неверная фамилия", placeholder: "Иванов",},
    { type: "text", id: "display_name", name: "display_name", label: "Имя в Чате", errorText: "Неверная фамилия", placeholder: "IVAN",},
    { type: "phone", id: "phone", name: "phone", label: "Телефон", errorText: "Введите телефон", placeholder: "+7(909)-967-30-30",},
];
const changePasswordInputs = [
    { type: "password", id: "password", name: "password", label: "Старый пароль", errorText: "Неверный пароль", value: '111111111' },
    { type: "password", id: "password_dbl", name: "password_dbl", label: "Новый пароль", errorText: "Неверный пароль", value: '111111111' },
    { type: "password", id: "password_repeat", name: "password_repeat", label: "Повторите новый пароль", errorText: "Пароли не совпадают", value: '111111111' }
];

export class ProfilePage extends Block {

    protected init(): void {
        this.children.avatar = new Avatar ({
            class:"profile__avatar",
            events: {
                click: ()=> this.onclick(),
            },
        });

        this.children.form = new Form ({
            class: 'profile__form',
            inputs: inputs,
            buttonText: 'Сохранить',
            buttonClass: 'profile__button',
        });

        this.children.formChangeLogin = new Form ({
            class: 'profile__form',
            inputs: changePasswordInputs,
            buttonText: 'Сохранить',
            buttonClass: 'profile__button',
        });

        this.children.changeProfile = new LinkItem ({
            class: 'profile__link',
            linkText: 'Изменить данные',
            events: {
                click: ()=> this.onChangeProfile(),
            },
        });

        this.children.changePassword = new LinkItem ({
            class: 'profile__link',
            linkText: 'Изменить пароль',
            events: {
                click: ()=> this.onChangePassword(),
            },
        });

        this.children.exitProfile = new LinkItem ({
            class: 'profile__exit',
            linkText: 'Выйти',
            events: {
                click: ()=> this.onExitProfile(),
            },
        });

        this.children.formChangeLogin.hide();
        (this.children.form as Form).hideButton();
    }

    onclick() {
        console.log('change avatar')
    }

    onChangeProfile() {
        (this.children.form as Form).showButton();
        
        this.children.changeProfile.hide();
        this.children.changePassword.hide();
        this.children.exitProfile.hide();
    }
    onChangePassword() {
        this.children.changeProfile.hide();
        this.children.changePassword.hide();
        this.children.exitProfile.hide();
        this.children.form.hide();
        this.children.formChangeLogin.show();
    }
  
    onExitProfile() {
        console.log('exit profile')
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
