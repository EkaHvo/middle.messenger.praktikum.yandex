import startPage from "./index.hbs";
import pageError from "./pages/page_error.hbs";
import login from "./pages/login.hbs";
import signin from "./pages/signin.hbs";
import mainChart from "./pages/main_chart.hbs";
import profile from "./pages/profile.hbs";
import "./components";

const error404obj = {
    errorCode: "404",
    errorText: "Не туда попали",
};
const error500obj = {
    errorCode: "500",
    errorText: "Мы уже фиксим",
};
const totalDataObj = {
    messages: [
        {
            name: "Иван",
            time: "10:15",
            text: "Текст со а может и нет",
            messageCount: "4",
            // avatar: "~/static/icons/foto.svg",
        },
        {
            name: "Лена",
            time: "Пн",
            text: "Привет! Как дела? Предлагаю сегодня поехать в Дагестан и сплавиться!",
            messageCount: "",
            // avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
        },
        {
            name: "Сергей Иванович",
            time: "23 января 2020",
            text: "Привет, дружище! Сто лет не общались! Что новенького у тебя?",
            messageCount: "3",
            // avatar: "http://localhost:1234/src/static/foto/camera.jpg",
        },
    ],
    loginInputs: [
        {
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            errorText: "Неверный логин",
        },
        {
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль",
            errorText: "Неверный пароль",
        },
    ],
    signinInputsObj: [
        {
            type: "email",
            id: "email",
            name: "email",
            label: "Почта",
            errorText: "Введите почту",
        },
        {
            type: "text",
            id: "login",
            name: "login",
            label: "Логин",
            errorText: "Введите логин",
        },
        {
            type: "text",
            id: "first_name",
            name: "first_name",
            label: "Имя",
            errorText: "Введите имя",
        },
        {
            type: "text",
            id: "second_name",
            name: "second_name",
            label: "Фамилия",
            errorText: "Введите фамилию",
        },
        {
            type: "phone",
            id: "phone",
            name: "phone",
            label: "Телефон",
            errorText: "Введите телефон",
        },
        {
            type: "password",
            id: "password",
            name: "password",
            label: "Пароль",
            errorText: "Введите пароль",
        },
        {
            type: "password",
            id: "password_dbl",
            name: "password_dbl",
            label: "Пароль (ещё раз)",
            errorText: "Пароли не совпадают",
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

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (window.location.pathname === "/page_404.html") {
        app.innerHTML = pageError(error404obj);
    } else if (window.location.pathname === "/page_500.html") {
        app.innerHTML = pageError(error500obj);
    } else if (window.location.pathname === "/profile.html") {
        app.innerHTML = profile(totalDataObj);
    } else if (window.location.pathname === "/login.html") {
        app.innerHTML = login(totalDataObj);
    } else if (window.location.pathname === "/signin.html") {
        app.innerHTML = signin(totalDataObj);
    } else if (window.location.pathname === "/main_chart.html") {
        app.innerHTML = mainChart(totalDataObj);
    } else {
        app.innerHTML = startPage({});
    }
});
