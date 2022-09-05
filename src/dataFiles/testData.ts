const testData = {
    messages: [
        {
            isIincoming: true,
            text:"Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро."
        },
        {
            isIincoming: false,
            text:"Круто!"
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
    loginInputs: [
        {
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            errorText: "Неверный логин",
            value: '',
            inputRegexp: '^(?=.*[A-Za-z_-])[A-Za-z0-9_-]{3,20}$',
        },
        {
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль",
            errorText: "Неверный пароль",
            value: '',
            inputRegexp: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
        },
    ],
    signinInputs: [
        {
            type: "email",
            id: "email",
            name: "email",
            label: "Почта",
            errorText: "Введите почту",
            inputRegexp: '^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$'
        },
        {
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            errorText: "Неверный логин",
            inputRegexp: '^(?=.*[A-Za-z_-])[A-Za-z0-9_-]{3,20}$',
        },
        {
            type: "text",
            id: "first_name",
            name: "first_name",
            label: "Имя",
            errorText: "Введите имя",
            inputRegexp: '^([А-Я]{1}[а-яё]{1,}|[A-Z]{1}[a-z]{1,})$',
        },
        {
            type: "text",
            id: "second_name",
            name: "second_name",
            label: "Фамилия",
            errorText: "Введите фамилию",
            inputRegexp: '^([А-Я]{1}[а-яё]{1,}|[A-Z]{1}[a-z]{1,})$',
        },
        {
            type: "phone",
            id: "phone",
            name: "phone",
            label: "Телефон",
            errorText: "Введите телефон",
            inputRegexp: '^\\+?[0-9]{10,15}$',
        },
        {
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль",
            errorText: "Неверный пароль",
            inputRegexp: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
        },
        {
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль (ещё раз)",
            errorText: "Пароли не совпадают",
            inputRegexp: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
        },
    ],
    profileInputsObj: [
        {
            type: "email",
            id: "email",
            name: "email",
            label: "Почта",
            placeholder: "pochta@yandex.ru",
            readonly: "true",
        },
        {
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            placeholder: "ivanivanov",
            readonly: "true",
        },
        {
            type: "text",
            id: "first_name",
            name: "first_name",
            label: "Имя",
            placeholder: "Иван",
            readonly: "true",
        },
        {
            type: "text",
            id: "second_name",
            name: "second_name",
            label: "Фамилия",
            placeholder: "Иванов",
            readonly: "true",
        },
        {
            type: "text",
            id: "display_name",
            name: "display_name",
            label: "Имя в Чате",
            placeholder: "Иван",
            readonly: "true",
        },
        {
            type: "phone",
            id: "phone",
            name: "phone",
            label: "Телефон",
            placeholder: "+7(909)-967-30-30",
            readonly: "true",
        },
    ],
};

export default testData;
