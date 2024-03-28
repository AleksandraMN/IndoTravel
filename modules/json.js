import {declOfNum} from './timer.js';

//  получения данных из json файла
export const loadTravels = async (cb) => {
  const result = await fetch('./date.json');
  const data = await result.json();

  return data;
};

// заполнение выпадающих списков на сайте с полями:
// "Дата тура" и "Кол-во Человек"
export const renderTravels = async () => {
  const data = await loadTravels();
  console.log('data', data);
  const tourDate = document.querySelector('#tour__date');
  const tourPeople = document.querySelector('#tour__people');

  // "Дата тура"
  const travels = data.map(item => {
    const option = document.createElement('option');
    option.className = 'tour__option';
    option.value = item.date;
    option.textContent = option.value;
    return option;
  });
  tourDate.append(...travels);

  // "Кол-во Человек"
  tourDate.addEventListener('change', () => {
    while (tourPeople.firstChild) { // удаление старых данных
      tourPeople.removeChild(tourPeople.firstChild);
    }
    data.map((item) => {
      if (item.date === tourDate.value) {
        for (let i = item['min-people']; i <= item['max-people']; i++) {
          const option = document.createElement('option');
          option.className = 'tour__option';
          option.value = '';
          option.textContent = i;
          tourPeople.append(option);
        }
      }
    });
  });
};

// В форме "Бронирование тура" при выборе даты и количества человек
// выводится информация о датах и общая стоимость
export const reservationForm = async () => {
  const data = await loadTravels();
  const reservationDate = document.querySelector('#reservation__date');
  const reservationPeople = document.querySelector('#reservation__people');
  const reservationPrice = document.querySelector('.reservation__price');
  const reservationData = document.querySelector('.reservation__data');

  // "Дата тура"
  const travels = data.map(item => {
    const option = document.createElement('option');
    option.classList.add('tour__option', 'reservation__option');
    option.value = item.date;
    option.textContent = option.value;
    return option;
  });
  reservationDate.append(...travels);


  // "Кол-во Человек"
  reservationDate.addEventListener('change', () => {
    while (reservationPeople.firstChild) { // удаление старых данных
      reservationPeople.removeChild(reservationPeople.firstChild);
    }
    data.map((item) => {
      if (item.date === reservationDate.value) {
        for (let i = item['min-people']; i <= item['max-people']; i++) {
          const option = document.createElement('option');
          option.className = 'tour__option';
          option.textContent = i;
          option.value;
          reservationPeople.append(option);
        }
        reservationPeople.addEventListener('change', () => {
          reservationData.textContent = reservationDate.value +
          ', ' + reservationPeople.value +
          declOfNum(reservationPeople.value, ['людей', 'человека', 'человек']);
          reservationPrice.textContent =
            Math.round(reservationPeople.value * item.price) + '₽';
        });
      }
    });
  });
};


