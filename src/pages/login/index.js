const login = `
  <div class="main__form-wrap">
    <div class="main__title">Вход</div>
    <form class="main__form">
      <div>
        <input class="main__input" type="text" id="login" maxlength="25" name="login">
        <label class="main__label" for="login">Логин</label>
        <div class="main__error">Неверный логин</div>
      </div>
      <div>
        <input class="main__input" type="password" id="password" maxlength="25" name="password">
        <label class="main__label" for="password">Пароль</label>
        <div class="main__error">Неверный пароль</div>
      </div>
      <button class="button login__button">Авторизоваться</button>
      <a href="/src/pages/signin/index.hbs" class="main__form-link main-link">Нет аккаунта?</a>
    </form>
  </div>
`;

console.log(document.location.href);

const Handlebars = require("handlebars");
const template = Handlebars.compile(login)({});

document.getElementById("login").innerHTML = login;
