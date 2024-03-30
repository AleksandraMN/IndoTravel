
const reservationFormElement = document.querySelector('.reservation__form');

const reservationName = document.querySelector('#reservation__name');
const reservationPhone = document.querySelector('#reservation__phone');
const reservationPrice = document.querySelector('.reservation__price');
const reservationDate = document.querySelector('#reservation__date');
const reservationPeople = document.querySelector('#reservation__people');
const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const footerInputWrap = document.querySelector('.footer__input-wrap');

const fetchRequest = async (url, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };
    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return;
    }
    throw new Error(`Ошибка ${response.status} ${response.statusText}`);
  } catch (err) {
    callback(err);
  }
};

// отправка данных из формы "Бронирование тура"
reservationFormElement.addEventListener('submit', (e) => {
  e.preventDefault();

  fetchRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: {
      date: reservationDate.value,
      peoples: reservationPeople.value,
      name: reservationName.value,
      phone: reservationPhone.value,
      price: reservationPrice.textContent,
    },
    callback(err, data) {
      const h2 = document.querySelector('.reservation__title');
      if (err) {
        h2.textContent = err;
        h2.style.color = 'red';
        console.warn(err, data);
        return;
      }
      h2.style.color = 'green';
      h2.textContent = `Ваша заявка успешно отправлена,` +
      ` номер заказа - ${data.id}. Наши менеджеры свяжутся` +
      ` с вами в течение 3-х рабочих дней.`;
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  reservationFormElement.reset();
});

// отправка данных из формы footer
footerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetchRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: {
      email: footerInput.value,
    },
    callback(err, data) {
      const h2 = document.querySelector('.footer__form-title');
      if (err) {
        console.warn(err, data);
        h2.textContent = err;
        h2.style.color = 'red';
        return;
      }
      h2.textContent = `Ваша заявка успешно отправлена`;
      document.querySelector('.footer__text').textContent = '';
      while (footerInputWrap.childNodes[1]) {
        footerInputWrap.removeChild(footerInputWrap.childNodes[1]);
      }
      const p = document.createElement('p');
      p.textContent = `Наши менеджеры свяжутся` +
      ` с вами в течение 3-х рабочих дней.`;
      footerInputWrap.append(p);
      footerInputWrap.style.border = '2px solid red';
      footerInputWrap.style.padding = '15px';
      footerInputWrap.style.width = '250px';
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  footerForm.reset();
});


