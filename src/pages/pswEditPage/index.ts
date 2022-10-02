import Block from "../../utils/Block";
import template from './pswEditPage.hbs';
import {Avatar} from '../../components/avatar';
import { Form } from '../../components/form';
import { ArrowIcon } from "../../components/arrowIcon";
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import Router from '../../utils/Router';
import store from "../../utils/Store";
import { EditPass } from "../../interfaces/interfaces";


export class PswEditPage extends Block {

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

        const changePasswordInputs = [
            { type: "password", id: "password", name: "oldPassword", label: "Старый пароль", errorText: "Неверный пароль", value: store.getState().user.password },
            { type: "password", id: "password_dbl", name: "newPassword", label: "Новый пароль", errorText: "Неверный пароль", value: store.getState().user.password },
            { type: "password", id: "password_repeat", name: "password_repeat", label: "Повторите новый пароль", errorText: "Пароли не совпадают", value: store.getState().user.password }
        ];

        this.children.changePassword = new Form ({
            class: 'profile__form',
            inputs: changePasswordInputs,
            buttonText: 'Сохранить',
            buttonClass: 'profile__button',
            events: {
                onSubmit: (data:EditPass)=> {
                    UserController.editPass(data);
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