import Block from "../../utils/Block";
import template from './messegeItem.hbs';
import { Messege } from '../../interfaces/interfaces';
import { getDate } from '../../utils/helpers';

interface MessegeItemProps extends Messege{
  id?: number;
  isIncoming?:boolean;
  is_read?:boolean;
}

export class MessegeItem extends Block<MessegeItemProps> {
  constructor(props:MessegeItemProps){
      super(props);
  }
  
  render() {
    return this.compile(template, { 
        isIncoming: this.props.isIncoming, 
        content: this.props.content, 
        time: getDate(this.props.time, 'time'), 
        date: getDate(this.props.time, 'date'),
    })
  }
}
