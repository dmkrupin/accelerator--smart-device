import {focusFirstInput} from './autofocus-first-input';

const introButton = document.querySelector('.intro__button');

const setSmoothScrollToLink = (link) => {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    const sectionID = link.getAttribute('href').substr(1);
    const sectionElement = document.getElementById(sectionID);

    setTimeout(() => {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 400);

    setTimeout(() => {
      focusFirstInput(sectionElement);
    }, 1200);
  });
};

export const setSmoothScrolls = () => {
  setSmoothScrollToLink(introButton);
};
