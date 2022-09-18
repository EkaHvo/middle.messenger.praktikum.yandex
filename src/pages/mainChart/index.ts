import Block from "../../utils/Block";
import template from './main_chart.hbs';


const testData = {
    messages: [
        {
            isIncoming: true,
            text:"Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
            time: '12:30',
        },
        {
            isIncoming: false,
            text:"Круто!",
            time: '12:35',
        }
    ],
    messageViews: [
        {
            name: "Иван",
            time: "10:15",
            text: "Текст со а может и нет",
            messageCount: "4",
        },
        {
            name: "Лена",
            time: "Пн",
            text: "Привет! Как дела? Предлагаю сегодня поехать в Дагестан и сплавиться!",
            messageCount: "",
        },
        {
            name: "Сергей Иванович",
            time: "23 января 2020",
            text: "Привет, дружище! Сто лет не общались! Что новенького у тебя?",
            messageCount: "3",
        },
    ],
};

export class MainChartPage extends Block {

    render() {
        return this.compile(template, {
            messages: testData.messages,
            hasActiveMessage: true,
            messageViews: testData.messageViews,
            children: this.children,
        })
    }
}
