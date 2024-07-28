const buttons = document.querySelectorAll('.accordion__button');

const onButtonClick = (evt) => {
  const button = evt.target;
  const accordion = button.closest('.accordion');
  button.classList.toggle('accordion__button--checked');
  accordion.classList.toggle('accordion--full');
};


buttons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
});
