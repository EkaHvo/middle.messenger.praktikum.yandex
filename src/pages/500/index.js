const error = `
  <div class="error">
    <div class="error__code">{{ errorCode }}</div>
    <div class="error__text">{{ errorText }}</div>
    <a href="/src/pages/main_chart/index.hbs" class="main-link error__link">Назад к чатам</a>
  </div>
`;

const Handlebars = require("handlebars");
const template = Handlebars.compile(error)(
  {
    errorCode: '500',
    errorText: 'Мы уже фиксим',
  }
);

document.getElementById("page-500").innerHTML = template;
