import Block from "../../utils/Block";
import template from './login.hbs';

interface loginInputsObj {
  [key:string]:string
}
interface LoginPageProps {
  loginInputs: Array<loginInputsObj>
}

export class LoginPage extends Block {
  constructor(props: LoginPageProps){
    super('div', props);
  }

  render() {
    return this.compile(template, {loginInputs: this.props.loginInputs})
  }
}