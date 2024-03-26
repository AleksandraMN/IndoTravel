
export const closeHeaderMenu = (headerMenu) => {
  headerMenu.addEventListener('click', ({target}) => {
    if (target.classList.contains('header__link')) {
      headerMenu.classList.remove('header__menu_active');
    }
  });
};

export const openHeaderMenu = (headerMenuButton, headerMenu) => {
  headerMenuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu_active');
  });
};


