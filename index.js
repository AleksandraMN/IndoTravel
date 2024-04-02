import {getTravelAccordion} from './modules/acc.js';
import {openHeaderMenu} from './modules/menu.js';
import {timer} from './modules/timer.js';
import {showAirplane} from './modules/fly.js';
import {renderTravels, reservationForm} from './modules/json.js';
import './modules/menu.js';
import './modules/requests.js';


const init = () => {
  // Дедлайн пропишите в data-атрибут data-deadline у элемента с классом timer
  const timerElement = document.querySelector('.timer');
  timerElement.dataset.timerDeadline = '04/25/2024'; // месяц, день, год

  const timerCountDays = document.querySelector('.timer__count_days');
  const timerCountHours = document.querySelector('.timer__count_hours');
  const timerCountMinutes = document.querySelector('.timer__count_minutes');

  const heroText = document.querySelector('.hero__text');
  const heroTimer = document.querySelector('.hero__timer');


  timer(timerElement.dataset.timerDeadline, timerCountDays,
      timerCountHours, timerCountMinutes, heroText, heroTimer);
  getTravelAccordion();
  openHeaderMenu();
  showAirplane();
  renderTravels();
  reservationForm();
};

init();


