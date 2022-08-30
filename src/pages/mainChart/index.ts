import Block from "../../utils/Block";
import template from './main_chart.hbs';
import { SearchIcon } from "../../components/searchIcon";
import { AddMessageLine } from "../../components/addMessageLine";
import { FriendInfoTopLine } from "../../components/friendInfoTopLine";

interface MainChartObj {
  [key:string]:string
}
interface MainChartPageProps {
  messages: Array<MainChartObj>
}

export class MainChartPage extends Block {
  constructor(props: MainChartPageProps){
    super('div', props);
  }

  protected init(): void {
    this.children.searchIcon = new SearchIcon({});
    this.children.addMessageLine = new AddMessageLine({});
    this.children.friendInfoTopLine = new FriendInfoTopLine({});
  }

  render() {
    return this.compile(template, {messages: this.props.messages})
  }
}