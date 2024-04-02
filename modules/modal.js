import loadStyle from './loadStyle.js';
import './requests.js';


const showModal = async (peoples, date, price) => {
  await loadStyle('./css/modal.css');
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const dates = document.createElement('p');
  const priceEl = document.createElement('p');
  const modalButtons = document.createElement('div');
  const btnConfirm = document.createElement('button');
  const btnChange = document.createElement('button');

  overlay.classList.add('overlay', 'overlay_confirm');
  modal.classList.add('modal');
  title.classList.add('modal__title');
  title.textContent = 'Подтверждение заявки';
  description.classList.add('modal__text');
  description.textContent = 'Бронирование путешествия в Индию на  ' +
    peoples + '   чел.';
  dates.classList.add('modal__text');
  dates.textContent = 'В даты:  ' + date;
  priceEl.classList.add('modal__text');
  priceEl.textContent = 'Стоимость тура  ' + price;

  modalButtons.classList.add('modal__button');
  btnConfirm.classList.add('modal__btn', 'modal__btn_confirm');
  btnConfirm.textContent = 'Подтверждаю';
  btnChange.classList.add('modal__btn', 'modal__btn_edit');
  btnChange.textContent = 'Изменить данные';

  overlay.append(modal);
  modal.append(title, description, dates, priceEl, modalButtons);
  modalButtons.append(btnConfirm, btnChange);

  document.body.append(overlay);


  return new Promise(resolve => {
    btnChange.addEventListener('click', () => {
      overlay.remove();
      resolve(false);
    });
    btnConfirm.addEventListener('click', () => {
      overlay.remove();
      resolve(true);
    });
  });
};


export default showModal;

