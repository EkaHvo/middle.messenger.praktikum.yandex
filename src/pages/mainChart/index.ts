import Block from "../../utils/Block";
import template from './main_chart.hbs';

interface MainChartPageProps {
    messageViews: Array<Record<string, string|boolean>>,
    messages: Array<Record<string, string|boolean>>,
    hasActiveMessage: boolean,
}

export class MainChartPage extends Block<MainChartPageProps> {
    constructor(props: {}){
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
