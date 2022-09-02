import Block from "../../utils/Block";
import template from './profile.hbs';
import {Avatar} from '../../components/avatar'

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

  protected init(): void {
    this.children.avatar = new Avatar ({
      class:"profile__avatar",
      events: {
        //todo вызов модального окна смены аватара
        click: ()=> console.log('test avatar event'),
      },
    })
  }

  render() {
    return this.compile(template, {
      profileInputs: this.props.profileInputs,
      children: this.children,
    })
  }
}