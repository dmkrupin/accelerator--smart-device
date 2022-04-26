const aboutButton = document.querySelector('.about__button');

const onAboutButtonClick = () => {
  const aboutText = document.querySelector('p[data-about-text="accordeon"]');

  if (aboutText.style.display === '') {
    aboutText.style.display = 'block';
    aboutButton.innerHTML = 'свернуть';
  } else {
    aboutText.style.display = '';
    aboutButton.innerHTML = 'подробнее';
  }
};

export const initAboutButton = () => {
  aboutButton.classList.remove('about__button--nojs');
  const aboutText = document.querySelector('p[data-about-text="accordeon-nojs"]');
  aboutText.setAttribute('data-about-text', 'accordeon');
  aboutButton.addEventListener('click', onAboutButtonClick);
};
