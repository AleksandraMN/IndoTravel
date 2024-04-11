

// В форме бронирование тураполе ФИО разрешите ввод только кириллицу и пробел
// в поле Телефон  разрешите ввод только символа + и цифр
export const sendingForm = (reservationName, reservationPhone) => {
  reservationName.addEventListener('input', () => {
    reservationName.value = reservationName.value.replace(/[^а-яё ]/iu, '');
  });
  /*
  reservationPhone.addEventListener('input', () => {
    reservationPhone.value = reservationPhone.value.replace(/[^0-9\+]/iu, '');
  });
  */
  reservationName.setAttribute('pattern', "([А-ЯЁа-яё ]+[А-ЯЁа-яё ]+[А-ЯЁа-яё ]+( [А-ЯЁа-яё ]+)*){6,40}");
  reservationName.setAttribute('title', "Иванов Иван Иванович");
  reservationPhone.setAttribute('type', 'tel');
  document.querySelector('.footer__input').setAttribute('type', 'email');
};

