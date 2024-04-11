import './inputmask.min.js';

const reservationPhone = document.querySelector('#reservation__phone');

const telMask = new window.Inputmask('+7 (999) 999-99-99');
telMask.mask(reservationPhone);

const validate = new window.JustValidate('.reservation__form');
validate
    .addField('.reservation__input_name', [
      {
        rule: 'required',
        errorMessage: 'Введите ваше ФИО полностью',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Не короче 6 символов',
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: 'Слишком длинное ФИО',
      },
    ])
    .addField('#reservation__phone', [
      {
        rule: 'required',
        errorMessage: 'Введите номер телефона',
      },
      {
        validator(value) {
          const phone = reservationPhone.inputmask.unmaskedvalue();
          return !!(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Телефон не корректный!',
      },
    ])
    .addField('#reservation__date', [
      {
        rule: 'required',
        errorMessage: 'Введите дату путешествия',
      },
    ])
    .addField('#reservation__people', [
      {
        rule: 'required',
        errorMessage: 'Введите количество человек',
      },
    ]);

// Добавить валидацию к полям с помощью JustValidata
const validate2 = new window.JustValidate('.footer__form');
validate2
    .addField('.footer__input', [
      {
        rule: 'required',
        errorMessage: 'Введите адрес электронной почты',
      },
      {
        rule: 'email',
        errorMessage: 'Ваш email не корректный!',
      }]);

const validate3 = new window.JustValidate('.tour__form');
validate3
    .addField('#tour__people', [
      {
        rule: 'required',
        errorMessage: 'Введите количество человек',
      }])
    .addField('#tour__date', [
      {
        rule: 'required',
        errorMessage: 'Введите дату путешествия',
      }]);
