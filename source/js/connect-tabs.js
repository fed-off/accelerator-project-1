const DISPLAY_MODIFIER = 'current';
const TAB_ATTRIBUTE = 'data-tab';
const tabs = document.querySelectorAll(`[${TAB_ATTRIBUTE}]`);


const onTabChange = (evt) => {
  const tab = evt.target;

  const relatedClass = tab.getAttribute('data-tab');
  const visibleClass = `${relatedClass}--${DISPLAY_MODIFIER}`;
  const currentReletedClass = `${relatedClass}--${tab.value}`;

  const relatedElements = document.querySelectorAll(`.${relatedClass}`);

  relatedElements.forEach((element) => {
    if (element.classList.contains(`${visibleClass}`)) {
      element.classList.remove(`${visibleClass}`);
    }

    if (element.classList.contains(`${currentReletedClass}`)) {
      element.classList.add(`${visibleClass}`);
    }
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('change', onTabChange);
});
