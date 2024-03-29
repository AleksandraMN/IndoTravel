import {declOfNum} from './timer.js';

//  получения данных из json файла
export const loadTravels = async (cb) => {
  const result = await fetch('./date.json');
  const data = await result.json();

  return data;
};

// Дата тура заполнение
const completeDate = (arr, a) => {
  const travels = arr.map(element => {
    const option = document.createElement('option');
    option.className = 'tour__option';
    option.value = element.date;
    option.textContent = option.value;
    return option;
  });
  a.append(...travels);
};

// удаление старых данных
const deleteList = (a) => {
  while (a.childNodes[2]) {
    a.removeChild(a.childNodes[2]);
  }
};

// Кол-во Человек заполнение
const completePeoples = (data, a, b) => {
  data.map((item) => {
    if (item.date === a.value) {
      for (let i = item['min-people']; i <= item['max-people']; i++) {
        const option = document.createElement('option');
        option.className = 'tour__option';
        option.value = '';
        option.textContent = i;
        b.append(option);
      }
    }
  });
};

// заполнение выпадающих списков на сайте с полями:
// "Дата тура" и "Кол-во Человек"
export const renderTravels = async () => {
  const data = await loadTravels();
  console.log('data', data);
  const tourDate = document.querySelector('#tour__date');
  const tourPeople = document.querySelector('#tour__people');

  // "Дата тура" заполнение
  completeDate(data, tourDate);

  // "Кол-во Человек" заполнение
  tourDate.addEventListener('change', () => {
    deleteList(tourPeople);
    completePeoples(data, tourDate, tourPeople);
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
  completeDate(data, reservationDate);

  // "Кол-во Человек"
  reservationDate.addEventListener('change', () => {
    deleteList(reservationPeople);

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


