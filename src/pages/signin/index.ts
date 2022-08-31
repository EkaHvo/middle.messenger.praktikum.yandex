import Block from "../../utils/Block";
import template from './signin.hbs';

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

  render() {
    return this.compile(template, {
      signinInputs: this.props.signinInputs,
      children: this.children,
    })
  }
}