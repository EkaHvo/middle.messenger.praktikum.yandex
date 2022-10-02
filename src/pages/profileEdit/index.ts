import Block from "../../utils/Block";
import template from './profileEdit.hbs';



import { Avatar } from '../../components/avatar';
import { Form } from '../../components/form';
import { ArrowIcon } from "../../components/arrowIcon";
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import Router from '../../utils/Router';
import store from "../../utils/Store";
import { User } from "../../interfaces/interfaces";


export class ProfileEdit extends Block {

    protected init(): void {
        AuthController.fetchUser(); 

        this.children.arrowIcon = new ArrowIcon ({
            class: 'profile__back',
            events: {
                click: ()=> Router.go('/settings'),
            },
        });

        this.children.avatar = new Avatar ({
            class:"profile__avatar",
            src: store.getState().user.avatar,
        });

        const inputs = [
            { type: "email",id: "email",name: "email",label: "Почта",errorText: "Неверная почта", value: store.getState().user.email},
            { type: "text", id: "login", name: "login", label: "Логин", errorText: "Неверный логин", value: store.getState().user.login},
            { type: "text", id: "first_name", name: "first_name", label: "Имя", errorText: "Неверное имя", value: store.getState().user.first_name},
            { type: "text", id: "second_name", name: "second_name", label: "Фамилия", errorText: "Неверная фамилия", value: store.getState().user.second_name},
            { type: "text", id: "display_name", name: "display_name", label: "Имя в Чате", errorText: "Неверная фамилия", value: store.getState().user.display_name},
            { type: "phone", id: "phone", name: "phone", label: "Телефон", errorText: "Введите телефон", value: store.getState().user.phone},
        ];

        this.children.form = new Form ({
            class: 'profile__form',
            inputs: inputs,
            buttonText: 'Сохранить',
            buttonClass: 'profile__button',
            events: {
                onSubmit: (data:User)=> {
                    UserController.editUser(data);
                }
            },
        });
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
