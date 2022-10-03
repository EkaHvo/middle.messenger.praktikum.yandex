import Block from "../../utils/Block";
import template from './profile.hbs';
import {Avatar} from '../../components/avatar';
import { Link } from '../../components/linkItem';
import { InputWrap } from '../../components/inputWrap';
import { ArrowIcon } from "../../components/arrowIcon";
import { AvatarEditor } from "../../components/avatarEditor";
import { Overlay } from "../../components/overlay";
import AuthController from '../../controllers/AuthController';
import Router from '../../utils/Router';
import store from "../../utils/Store";


export class ProfilePage extends Block {

    protected init(): void {
        AuthController.fetchUser(); 

        this.children.arrowIcon = new ArrowIcon ({
            class: 'profile__back',
            events: {
                click: ()=> Router.go('/messenger'),
            },
        });

        this.children.avatar = new Avatar ({
            class:"profile__avatar",
            src: store.getState().user.avatar,
            events: {
                click: ()=> this.showAvatarEditor(),
            },
        });

        const inputs = [
            { type: "email", id: "email", name: "email", label: "Почта", errorText: "Неверная почта", readonly: true, value: store.getState().user.email},
            { type: "text", id: "login", name: "login", label: "Логин", errorText: "Неверный логин", readonly: true, value: store.getState().user.login},
            { type: "text", id: "first_name", name: "first_name", label: "Имя", errorText: "Неверное имя", readonly: true, value: store.getState().user.first_name},
            { type: "text", id: "second_name", name: "second_name", label: "Фамилия", errorText: "Неверная фамилия", readonly: true, value: store.getState().user.second_name},
            { type: "text", id: "display_name", name: "display_name", label: "Имя в Чате", errorText: "Неверная фамилия", readonly: true, value: store.getState().user.display_name},
            { type: "phone", id: "phone", name: "phone", label: "Телефон", errorText: "Введите телефон", readonly: true, value: store.getState().user.phone},
        ];


        this.children.inputsBlock = inputs.map((input) => {

            const inputWrap:InputWrap = new InputWrap({
                type: input.type,
                id: input.id,
                name: input.name,
                label: input.label,
                value: input.value,
                errorText: input.errorText,
                readonly: input.readonly,
            });

            return inputWrap
        });
        
        this.children.changeProfile = new Link({
            class: 'profile__link',
            label: 'Изменить данные',
            events: {
                click: ()=> Router.go('/profileEdit'),
            },
        });

        this.children.changePassword = new Link({
            class: 'profile__link',
            label: 'Изменить пароль',
            events: {
                click: ()=> Router.go('/pswEditPage'),
            },
        });

        this.children.exitProfile = new Link({
            class: 'profile__exit',
            label: 'Выйти',
            events: {
                click: ()=> AuthController.logout(),
            },
        });

        this.children.avatarEditor = new AvatarEditor({
            changeAvatar: () => this.changeAvatar()
        });

        this.children.overlay = new Overlay({
            events: {
                click: () => this.hideAvatarEditor()
            },
        });

        this.hideAvatarEditor();
    }

    showAvatarEditor() {
        this.children.avatarEditor.show();
        this.children.overlay.show();
    }    

    hideAvatarEditor(){
        this.children.avatarEditor.hide();
        this.children.overlay.hide();
    }
    
    changeAvatar(){
        this.children.avatar.setProps({
            src: store.getState().user.avatar,
        });
        this.hideAvatarEditor();
    }
  

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}
