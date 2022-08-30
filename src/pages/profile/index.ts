import Block from "../../utils/Block";
import template from './profile.hbs';
import { Avatar } from "../../components/avatar";
import { ArrowIcon } from "../../components/arrowIcon";

interface profileInputsObj {
  [key:string]:string
}
interface ProfilePageProps {
  profileInputs: Array<profileInputsObj>
}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps){
    super('div', props);
  }

  protected init(): void {
    this.children.avatar = new Avatar({
      class: "profile__avatar",
    });
    this.children.arrowIcon = new ArrowIcon({});
  }

  render() {
    return this.compile(template, {profileInputs: this.props.profileInputs})
  }
}