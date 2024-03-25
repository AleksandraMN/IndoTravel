
// Слова возле цифр должны склонятся
const declOfNum = (n, titles, from) =>
  ' ' + titles[from ? n % 10 === 1 && n % 100 !== 11 ?
      1 : 2 : n % 10 === 1 && n % 100 !== 11 ?
      0 : n % 10 >= 2 && n % 10 <= 4 && (
      n % 100 < 10 || n % 100 >= 20) ? 1 : 2];


// На первом экране реализуйте таймер отcчета
// (дней : минут : часов) до дедлайна (deadline)
export const timer =
(deadline, timerCountDays, timerCountHours, timerCountMinutes,
    heroText, heroTimer) => {
  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    let minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    let hours = Math.floor(timeRemaining / 1000 / 3600 % 24);
    const days = Math.floor(timeRemaining / 1000 / 3600 / 24 % 30);

    // Время должно выводиться в формате двухзначных чисел для часов и минут
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return {timeRemaining, days, hours, minutes};
  };
  getTimeRemaining();

  const start = () => {
    const timer = getTimeRemaining();
    timerCountDays.textContent = timer.days;
    timerCountHours.textContent = timer.hours;
    timerCountMinutes.textContent = timer.minutes;
    const intervalId = setTimeout(start, 60000);

    const timerUnitsDays = document.querySelector('.timer__units_days');
    const timerUnitsHours = document.querySelector('.timer__units_hours');
    const timerUnitsMinutes = document.querySelector('.timer__units_minutes');

    timerUnitsDays.textContent = declOfNum(timer.days, ['день', 'дня', 'дней']);
    timerUnitsHours.textContent = declOfNum(
        timer.hours, ['час', 'часа', 'часов']);
    timerUnitsMinutes.textContent = declOfNum(
        timer.minutes, ['минута', 'минуты', 'минут']);

    //  Когда в таймере время вышло
    // элементы с классами hero__text и hero__timer должны со страницы исчезнуть
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      heroText.remove();
      heroTimer.remove();
    }
  };
  start();
};
