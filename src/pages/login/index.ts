import Block from '../../utils/Block';
import template from './login.hbs';
import {InputWrap} from '../../components/inputWrap';
import { Button } from '../../components/button';
import { INPUTREGEXP } from '../../utils/regexpConstants';

interface LoginPageProps {
  [key:string]: string | boolean
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps){
    super(props);
  }

  protected init(): void {

    this.children.loginInput = new InputWrap ({
      type: "text",
      id: "login",
      name: "login",
      label: "Логин",
      value: '',
      errorText: "Неверный логин",
      inputRegexp: INPUTREGEXP.login,
    })
    this.children.passwordInput = new InputWrap ({
      type: "password",
      id: "password",
      name: "password",
      label: "Пароль",
      value: '',
      errorText: "Неверный пароль",
      inputRegexp: INPUTREGEXP.password,
    })

    this.children.button = new Button ({
      text: "Авторизоваться",
      events: {
        click: (e:Event) => this.onClick(e),
      }
    })
  }

  protected onClick(e:Event){
    e.preventDefault();

    let form = (e.target as HTMLElement).closest('.form');
    if(form) {
      const inputs = form.querySelectorAll('input');
      let formData:Record<string, string> = {};
      let isErrorForm:boolean = false;
  
      inputs.forEach(input => {
        const name:string = input.name;
        const value:string = input.value;

        let isError:boolean = this.validate(value, INPUTREGEXP[name]);

        if(isError) {
          isErrorForm = true;
        }
        formData[name] = value;
      })
      console.log(formData)
    }
  }

  render() {
    return this.compile(template, {
      children: this.children,
    })
  }
}
