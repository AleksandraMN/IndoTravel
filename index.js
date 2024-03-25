import {timer} from './modules/timer.js';

const init = () => {
  // Дедлайн пропишите в data-атрибут data-deadline у элемента с классом timer
  const timerElement = document.querySelector('.timer');
  timerElement.dataset.timerDeadline = '04/05/2024'; // месяц, день, год

  const timerCountDays = document.querySelector('.timer__count_days');
  const timerCountHours = document.querySelector('.timer__count_hours');
  const timerCountMinutes = document.querySelector('.timer__count_minutes');

  const heroText = document.querySelector('.hero__text');
  const heroTimer = document.querySelector('.hero__timer');

  timer(timerElement.dataset.timerDeadline, timerCountDays,
      timerCountHours, timerCountMinutes, heroText, heroTimer);
};

init();


