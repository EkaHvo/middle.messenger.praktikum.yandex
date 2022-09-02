import Block from "../../utils/Block";
import template from './signin.hbs';
import { Input } from '../../components/input';

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
    this.children.inputEmail= new Input ({
      type: "email",
      id: "email",
      name: "email",
      label: "Почта",
      errorText: "Введите почту",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputLogin = new Input ({
      type: "text",
      id: "login",
      name: "login",
      label: "Логин",
      errorText: "Неверный логин",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputName = new Input ({
      type: "text",
      id: "first_name",
      name: "first_name",
      label: "Имя",
      errorText: "Введите имя",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputSecondName = new Input ({
      type: "text",
      id: "second_name",
      name: "second_name",
      label: "Фамилия",
      errorText: "Введите фамилию",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputPhone = new Input ({
      type: "phone",
      id: "phone",
      name: "phone",
      label: "Телефон",
      errorText: "Введите телефон",
      events: {
        //todo 
        // '+1111111111111111'.match(/^\+?\d{10,15}$/g)
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputPassword = new Input ({
      type: "password",
      id: "password",
      name: "password",
      label: "Пароль",
      errorText: "Введите пароль",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
    this.children.inputPasswordDbl = new Input ({
      type: "password",
      id: "password_dbl",
      name: "password_dbl",
      label: "Пароль (ещё раз)",
      errorText: "Пароли не совпадают",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
  }

  render() {
    return this.compile(template, {
      signinInputs: this.props.signinInputs,
      children: this.children,
    })
  }
}