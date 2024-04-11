
import showModal from './modal.js';
import './maska.js';


const reservationFormElement = document.querySelector('.reservation__form');

const reservationName = document.querySelector('#reservation__name');
const reservationPhone = document.querySelector('#reservation__phone');
const reservationPrice = document.querySelector('.reservation__price');
const reservationDate = document.querySelector('#reservation__date');
const reservationPeople = document.querySelector('#reservation__people');
const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const footerInputWrap = document.querySelector('.footer__input-wrap');
const h2 = document.querySelector('.reservation__title');
const reservationButton = document.querySelector('.reservation__button');
const footerButton = document.querySelector('.footer__button');
const tourForm = document.querySelector('.tour__form');
const tourButton = document.querySelector('.tour__button');
const tourDate = document.querySelector('#tour__date');
const tourPeople = document.querySelector('#tour__people');

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
      if (callback) return callback(null, data);
      return;
    }
    throw new Error(`Ошибка ${response.status} ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};


// отправка данных из формы "Бронирование тура"
reservationFormElement.addEventListener('submit', async (e) => {
  e.preventDefault();

  const date = reservationDate.value;
  const peoples = reservationPeople.value;
  const price = reservationPrice.textContent;

  if (e.submitter === reservationButton &&
    reservationName.validity.valid === true &&
    reservationPhone.validity.valid === true &&
    reservationDate.validity.valid === true &&
    reservationPeople.validity.valid === true) {
    const result = showModal(peoples, date, price);

    result
        .then(res => {
          console.log(res);
          if (res === true) {
            fetchRequest('https://jsonplaceholder.typicode.com/posts', {
              method: 'post',
              body: {
                date: reservationDate.value,
                peoples: reservationPeople.value,
                name: reservationName.value,
                phone: reservationPhone.value,
                price: reservationPrice.textContent,
                userId: Math.random().toString().substring(2, 4),
              },
              callback(err, obj) {
                if (err) {
                  h2.textContent = err;
                  h2.style.color = 'red';
                  console.warn(err, obj);
                  return;
                }
                h2.style.color = 'green';
                h2.textContent = `Ваша заявка успешно отправлена,` +
                ` заявка - № ${obj.userId}.`;
                reservationDate.setAttribute('disabled', 'true');
                reservationPeople.setAttribute('disabled', 'true');
                reservationName.setAttribute('disabled', 'true');
                reservationPhone.setAttribute('disabled', 'true');
                reservationButton.setAttribute('disabled', 'true');
              },
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
          }
        });
  }
});

// отправка данных из формы footer
footerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (e.submitter === footerButton &&
  footerInput.validity.valid === true) {
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
        h2.style.width = '250px';
        document.querySelector('.footer__text').textContent = '';
        while (footerInputWrap.childNodes[1]) {
          footerInputWrap.removeChild(footerInputWrap.childNodes[1]);
        }
        const p = document.createElement('p');
        p.textContent = `Наши менеджеры свяжутся` +
        ` с вами в течение 3-х рабочих дней.`;

        footerInputWrap.append(p);
        footerInputWrap.style.border = '2px solid red';
        footerInputWrap.style.padding = '20px';
        footerInputWrap.style.width = '250px';
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }


  footerForm.reset();
});


// отправка данных из формы tour
tourForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = tourDate.value;
  const peoples = tourPeople.value;
  
  if (e.submitter === tourButton &&
    tourDate.validity.valid === true &&
    tourPeople.validity.valid === true) {
    const result = showModal(peoples, date);

    result
        .then(res => {
          console.log(res);
          if (res === true) {
            fetchRequest('https://jsonplaceholder.typicode.com/posts', {
              method: 'post',
              body: {
                date: reservationDate.value,
                peoples: reservationPeople.value,
                name: reservationName.value,
                phone: reservationPhone.value,
                price: reservationPrice.textContent,
                userId: Math.random().toString().substring(2, 4),
              },
              callback(err, obj) {
                if (err) {
                  h2.textContent = err;
                  h2.style.color = 'red';
                  console.warn(err, obj);
                  return;
                }
                h2.style.color = 'green';
                h2.textContent = `Ваша заявка успешно отправлена,` +
                  ` заявка - № ${obj.userId}.`;
                reservationDate.setAttribute('disabled', 'true');
                reservationPeople.setAttribute('disabled', 'true');
                reservationName.setAttribute('disabled', 'true');
                reservationPhone.setAttribute('disabled', 'true');
                reservationButton.setAttribute('disabled', 'true');
              },
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
          }
        });
  }

  footerForm.reset();
});


