import Block from "../../utils/Block";
import template from './main_chart.hbs';

interface MainChartObj {
  [key:string]:string  | boolean,
}
interface MainChartPageProps {
  messageViews: Array<MainChartObj>,
  messages: Array<MainChartObj>,
  hasActiveMessage: boolean,
  isActiveTopLine: boolean,
  isActiveClip: boolean
}

export class MainChartPage extends Block {
  constructor(props: MainChartPageProps){
    super(props);
  }

  render() {
    return this.compile(template, {
      isActiveClip: this.props.isActiveClip,
      isActiveTopLine: this.props.isActiveTopLine,
      messages: this.props.messages,
      hasActiveMessage: this.props.hasActiveMessage,
      messageViews: this.props.messageViews,
      children: this.children,
    })
  }
}