import Block from "../../utils/Block";
import template from './main_chart.hbs';

interface MainChartObj {
    [key:string]:string  | boolean,
}
interface MainChartPageProps {
    messageViews: Array<MainChartObj>,
    messages: Array<MainChartObj>,
    hasActiveMessage: boolean,
}

export class MainChartPage extends Block<MainChartPageProps> {
    constructor(props: MainChartPageProps){
        super(props);
    }

    render() {
        return this.compile(template, {
            messages: this.props.messages,
            hasActiveMessage: this.props.hasActiveMessage,
            messageViews: this.props.messageViews,
            children: this.children,
        })
    }
}
