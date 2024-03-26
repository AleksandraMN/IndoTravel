

export const getTravelAccordion = () => {
  const liElements = document.querySelectorAll('.travel__item');
  const buttons = document.querySelectorAll('.travel__item-title');
  const itemsTextWrapper =
  document.querySelectorAll('.travel__item-text-wrapper');

  let heightWrapper = 0;

  itemsTextWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
      heightWrapper = elem.scrollHeight;
    }
  });

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < liElements.length; i++) {
        if (index === i) {
          itemsTextWrapper[i].style.height =
          liElements[i].classList.contains('travel__item_active') ?
            '' : `${heightWrapper}px`;
          liElements[i].classList.toggle('travel__item_active');
        } else {
          liElements[i].classList.remove('travel__item_active');
          itemsTextWrapper[i].style.height = '';
        }
      }
    });
  });
};

