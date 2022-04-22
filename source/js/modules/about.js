const aboutButton = document.querySelector('.about__button');
const aboutText = document.querySelector('p[data-about-text="accordeon"]');

const onAboutButtonClick = () => {
  if (aboutText.style.display === '') {
    aboutText.style.display = 'block';
    aboutButton.innerHTML = 'свернуть';
  } else {
    aboutText.style.display = '';
    aboutButton.innerHTML = 'подробнее';
  }
};

export const initAboutButton = () => {
  aboutButton.addEventListener('click', onAboutButtonClick);
};
