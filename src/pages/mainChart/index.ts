import Block from "../../utils/Block";
import template from './main_chart.hbs';

interface MainChartObj {
  [key:string]:string
}
interface MainChartPageProps {
  messages: Array<MainChartObj>
}

export class MainChartPage extends Block {
  constructor(props: MainChartPageProps){
    super(props);
  }

  render() {
    return this.compile(template, {
      messages: this.props.messages,
      children: this.children,
    })
  }
}