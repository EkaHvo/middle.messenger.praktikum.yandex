const signin = `
  <div class="main__form-wrap">
    <div class="main__title">Регистрация</div>
    <form class="main__form">
      <div>
        <input class="main__input" type="email" id="email" name="email">
        <label class="main__label" for="email">Почта</label>
        <div class="main__error">Введите почту</div>
      </div>
      <div>
        <input class="main__input" type="text" id="login" maxlength="25" name="login">
        <label class="main__label" for="login">Логин</label>
        <div class="main__error">Введите логин</div>
      </div>
      <div>
        <input class="main__input" type="text" id="first_name" name="first_name">
        <label class="main__label" for="first_name">Имя</label>
        <div class="main__error">Введите имя</div>
      </div>
      <div>
        <input class="main__input" type="text" id="second_name" name="second_name">
        <label class="main__label" for="second_name">Фамилия</label>
        <div class="main__error">Введите фамилию</div>
      </div>
      <div>
        <input class="main__input" type="text" id="phone" name="phone">
        <label class="main__label" for="phone">Телефон</label>
        <div class="main__error">Введите телефон</div>
      </div>
      <div>
        <input class="main__input" type="password" id="password" maxlength="25" name="password">
        <label class="main__label" for="password">Пароль</label>
        <div class="main__error">Введите пароль</div>
      </div>
      <div>
        <input class="main__input" type="password" id="password" maxlength="25" name="password_dbl">
        <label class="main__label" for="password">Пароль (ещё раз)</label>
        <div class="main__error">Пароли не совпадают</div>
      </div>
      <div class="buttons-wrap">
        <button class="button signin__button">Зарегистрироваться</button>
        <a href="/src/pages/login/index.hbs" class="main__form-link main-link">Войти</a>
      </div>
    </form>
  </div>
`;

// const Handlebars = require("handlebars");
// const template = Handlebars.compile(login)(
// {}
// );

document.getElementById("signin").innerHTML = signin;
