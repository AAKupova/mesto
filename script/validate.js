/**
 * Функция валидации поля
 *
 * @param {HTMLElement} form форма которую валидируем
 * @param {HTMLElement} field поле которое валидируем
 * @param {TFormData} formData параметры валидации формы
 */
const isFieldValid = (form, field, formData) => {
  !field.validity.valid
    ? showError(form, field, formData)
    : hideError(form, field, formData);
};

/**
 * Проверяет наличие полей не прошедших валидацию
 *
 * @param {Array.<HTMLElement>} fields массив dom елементов полей формы
 * @returns {Boolean} true - если есть не прошедшие валидацию поля формы
 */
const hasInvalidField = (fields) =>
  fields.some((field) => !field.validity.valid);

/**
 * Функция переключения состояния disabled кнопки
 *
 * @param {Array.<HTMLElement>} fields массив dom елементов полей формы
 * @param {HTMLElement} button dom елемент кнопки
 * @param {TFormData} formData параметры валидации формы
 */
const toggleButtonState = (fields, button, formData) => {
  if (hasInvalidField(fields)) {
    button.classList.add(formData.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  } else {
    button.classList.remove(formData.inactiveButtonClass);
    button.removeAttribute('disabled');
  }
};

/**
 * Функция показа ошибки валидации поля формы
 *
 * @param {HTMLElement} form dom елемент формы
 * @param {HTMLElement} field dom елемент поля формы
 * @param {TFormData} formData параметры валидации формы
 */
const showError = (form, field, formData) => {
  const fieldError = form.querySelector(`.${field.id}-error`);

  field.classList.add(formData.inputErrorClass);
  fieldError.textContent = field.validationMessage;
  fieldError.classList.add(formData.errorClass);
};

/**
 * Функция скрытия ошибки валидации поля формы
 *
 * @param {HTMLElement} form dom елемент формы
 * @param {HTMLElement} field dom елемент поля формы
 * @param {TFormData} formData параметры валидации формы
 */
const hideError = (form, field, formData) => {
  const fieldError = form.querySelector(`.${field.id}-error`);

  field.classList.remove(formData.inputErrorClass);
  fieldError.classList.remove(formData.errorClass);
  fieldError.textContent = '';
};

/**
 * Функция первичной валидации
 * и подписки на события изменения данных в полях формы
 *
 * @param {HTMLElement} form dom елемент формы
 * @param {Array.<HTMLElement>} fields массив dom елементов полей формы
 * @param {HTMLElement} button dom елемент кнопки
 * @param {TFormData} formData параметры валидации формы
 * @returns {Array.<Function>} массив обработчиков событий изменения полей формы на которые подписались
 */
const enableFieldsValidation = (form, fields, button, formData) => {
  let handlers = [];

  toggleButtonState(fields, button, formData);

  fields.forEach((field) => {
    const onInput = () => {
      isFieldValid(form, field, formData);
      toggleButtonState(fields, button, formData);
    };

    hideError(form, field, formData);

    field.addEventListener('input', onInput);

    handlers.push(onInput);
  });

  return handlers;
};

/**
 * Функция первичной инициализации валидации
 *
 * @param {TFormData} formData параметры валидации формы
 */
const enableValidation = (formData) => {
  const form = document.querySelector(formData.formSelector);
  const fields = [...form.querySelectorAll(formData.inputSelector)];
  const button = form.querySelector(formData.submitButtonSelector);
  const handlers = enableFieldsValidation(form, fields, button, formData);
  const onReset = () => {
    fields.forEach((field, index) => {
      field.removeEventListener('input', handlers[index]);
    });

    form.removeEventListener('reset', onReset);
  };

  form.addEventListener('reset', onReset);
};
