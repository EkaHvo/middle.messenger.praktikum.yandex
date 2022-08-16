const mainChart = `
<aside class="aside">
  <a href="#" class="toprofile">Профиль</a>
  <div class="search">
      <input class="search__input" type="text"></input>
      <div class="search__icon">
          <img class="search__img" src="static/icons/search.svg" alt="search icon">
          <span>Поиск</span>
      </div>
  </div>
  <ul class="messages">
      {{#each messages}}
          <li class="message">
              <div class="avatar">
                  <img class="avatar__img" src="static/icons/camera.jpg"></img>
              </div>
              <div class="info">
                  <div class="info__wrap">
                      <span class="info__name">{{ this.name }}</span>
                      <span class="info__date">{{ this.time }}</span>
                  </div>
                  <div class="info__wrap">
                      <span class="info__text">{{ this.text }}</span>
                      {{#if this.messageCount}}
                          <span class="info__unread-count">{{ this.messageCount }}</span>
                      {{/if}}
                  </div>
              </div>
          </li>
      {{/each}}
  </ul>
</aside>
<div class="chart chart_empty" style="display:none">
    <span>Выберите чат чтобы отправить сообщение</span>
</div>
<div class="chart">
    <div>
        <div class="friend">
            <div class="avatar">
                <img class="avatar__img" src="static/icons/camera.jpg"></img>
            </div>
            <div class="friend__name">Иван</div>
        </div>
        <div class="more-dottes"></div>
    </div>

    <div>тело чата</div>
    <div>поле сообщения</div>
</div>
`;

const Handlebars = require("handlebars");

const template = Handlebars.compile(mainChart)(
  {
    messages: [
        {
            name: 'Иван',
            time: '10:15',
            text: 'Текст со а может и нет',
            messageCount: '4'
        },
        {
            name: 'Лена',
            time: 'Пн',
            text: 'Привет! Как дела? Предлагаю сегодня поехать в Дагестан и сплавиться!',
            messageCount: ''
        },
        {
            name: 'Сергей Иванович',
            time: '23 января 2020',
            text: 'Привет, дружище! Сто лет не общались! Что новенького у тебя?',
            messageCount: '3'
        },
    ],
  }
);



document.getElementById('main-chart').innerHTML = template;
// document.getElementById('main-chart').innerHTML = searchCartInput;