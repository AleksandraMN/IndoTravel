
const closeMenu = ({target}) => {
  console.log(target);
  const headerMenu = document.querySelector('.header__menu');

  if (!target.closest('.header__menu-button') &&
    !target.closest('.header__menu') ||
    target.classList.contains('header__link')) {
    headerMenu.classList.remove('header__menu_active');
    document.removeEventListener('click', closeMenu);
  }
};

export const openHeaderMenu = () => {
  const headerMenu = document.querySelector('.header__menu');
  const headerMenuButton = document.querySelector('.header__menu-button');

  headerMenuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu_active');
    // анимация меню
    const duration = 500; // время
    const distance = 50; // дистанция перемещения элемента
    let requestId = NaN;

    const startAnimation = (duration, callback) => {
      let startAnimation = NaN;

      requestId = requestAnimationFrame(function step(timestamp) {
        startAnimation ||= timestamp;

        const progress = (timestamp - startAnimation) / duration;

        callback(progress);
        if (progress < 1) {
          requestId = requestAnimationFrame(step);
        }
        document.addEventListener('click', closeMenu);
      });
    };
    // функция: вначале разгоняется, в конце - замедляется
    const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

    if (headerMenu.closest('.header__menu_active')) {
      startAnimation(duration, (progress) => {
        const top = easeInOut(progress) * distance; //  переместить анимацию
        headerMenu.style.transform = `translateY(${top}px)`;
      });
    } else {
      cancelAnimationFrame(requestId);
    }
  });
};


