import Block from "../../utils/Block";
import template from './profile.hbs';

interface profileInputsObj {
  [key:string]:string
}
interface ProfilePageProps {
  profileInputs: Array<profileInputsObj>
}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps){
    super(props);
  }

  render() {
    return this.compile(template, {
      profileInputs: this.props.profileInputs,
      children: this.children,
    })
  }
}