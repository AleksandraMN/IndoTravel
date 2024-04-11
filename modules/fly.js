
export const showAirplane = () => {
  const docEl = document.documentElement;
  let bottom = 0;
  const fly = document.createElement('div');

  fly.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0px;
    bottom: ${bottom};
    pointer-events: auto;
    z-index: 10;
    background: url('./img/airplane.svg') center/contain no-repeat;
  `;

  document.body.append(fly);

  const stepFly = () => {
    const maxBottom = fly.clientHeight - docEl.clientHeight;
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;
    const percentScroll = (window.pageYOffset * 100) / maxScroll;

    bottom = maxBottom * (percentScroll / 100);

    fly.style.transform = `translateY(${bottom}px)`;
    if (docEl.clientWidth >= 758) {
      requestAnimationFrame(stepFly);
    } else {
      fly.style.display = 'none';
    }
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(stepFly);
  });

  requestAnimationFrame(stepFly);
};
