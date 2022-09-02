import Block from "../../utils/Block";
import template from './login.hbs';
import { Input } from '../../components/input';

interface loginInputsObj {
  [key:string]:string
}
interface LoginPageProps {
  loginInputs: Array<loginInputsObj>
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps){
    super(props);
  }

  protected init(): void {
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
    this.children.inputPassword = new Input ({
      type: "password",
      id: "password",
      name: "password",
      label: "Пароль",
      errorText: "Неверный пароль",
      events: {
        //todo 
        focusin: ()=> console.log('test focusin'),
        focusout: ()=> console.log('test focusout'),
      },
    })
  }

  render() {
    return this.compile(template, {
      children: this.children,
    })
  }
}