const telInputElement = document.querySelector('.form__text[name="tel"]');
const popupTelInputElement = document.querySelector('.form__text[name="popup-tel"]');

// Обработчик-валидатор поля ввода телефона
const onTelInputInput = (telField) => {
  const telMask = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const input = telField.value;
  // Проверяем телефон на соответствие маске
  if (!telMask.test(input)) {
    telField.setCustomValidity('Введите телефон в формате +7 000 00 00');
  } else {
    telField.setCustomValidity('');
  }
  telField.reportValidity();
};

const initFormValidation = () => {
  if (telInputElement) {
    // Валидируем поле ввода телефона в блоке сайта
    telInputElement.addEventListener('input', () => {
      onTelInputInput(telInputElement);
    });
  }
  if (popupTelInputElement) {
  // Валидируем поле ввода телефона в попапе
    popupTelInputElement.addEventListener('input', () => {
      onTelInputInput(popupTelInputElement);
    });
  }
};

export {initFormValidation};
