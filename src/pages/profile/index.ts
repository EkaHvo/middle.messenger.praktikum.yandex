import Block from "../../utils/Block";
import template from './profile.hbs';
import {Avatar} from '../../components/avatar';
import { LinkItem } from '../../components/linkItem';
import { Form } from '../../components/form';

interface ProfilePageProps {
    inputs:Array<Record<string, string>>,
    changePasswordInputs:Array<Record<string, string>>,
}

export class ProfilePage extends Block<ProfilePageProps> {
    constructor(props: {}){
        super(props);
    }

    protected init(): void {
        const {inputs, changePasswordInputs} = this.props;

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
