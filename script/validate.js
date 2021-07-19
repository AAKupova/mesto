// /**
//  * Функция валидации поля
//  *
//  * @param {HTMLElement} form форма которую валидируем
//  * @param {HTMLElement} field поле которое валидируем
//  * @param {TFormData} formData параметры валидации формы
//  */
// const isFieldValid = (form, field, formData) => {
//   !field.validity.valid
//     ? showError(form, field, formData)
//     : hideError(form, field, formData);
// };

// /**
//  * Проверяет наличие полей не прошедших валидацию
//  *
//  * @param {Array.<HTMLElement>} fields массив dom элементов полей формы
//  * @returns {Boolean} true - если есть не прошедшие валидацию поля формы
//  */
// const hasInvalidField = (fields) =>
//   fields.some((field) => !field.validity.valid);

// /**
//  * Функция блокировки кнопки
//  *
//  * @param {HTMLElement} button dom элемент кнопки
//  * @param {TFormData} formData параметры валидации формы
//  */
// const lockButton = (button, formData) => {
//   button.classList.add(formData.inactiveButtonClass);
//   button.setAttribute('disabled', 'disabled');
// };

// /**
//  * Функция разблокировки кнопки
//  *
//  * @param {HTMLElement} button dom элемент кнопки
//  * @param {TFormData} formData параметры валидации формы
//  */
// const unlockButton = (button, formData) => {
//   button.classList.remove(formData.inactiveButtonClass);
//   button.removeAttribute('disabled');
// };

// /**
//  * Функция переключения состояния disabled кнопки
//  *
//  * @param {Array.<HTMLElement>} fields массив dom элементов полей формы
//  * @param {HTMLElement} button dom элемент кнопки
//  * @param {TFormData} formData параметры валидации формы
//  */
// const toggleButtonDisable = (fields, button, formData) => {
//   hasInvalidField(fields)
//     ? lockButton(button, formData)
//     : unlockButton(button, formData);
// };

// /**
//  * Функция показа ошибки валидации поля формы
//  *
//  * @param {HTMLElement} form dom элемент формы
//  * @param {HTMLElement} field dom элемент поля формы
//  * @param {TFormData} formData параметры валидации формы
//  */
// const showError = (form, field, formData) => {
//   const fieldError = form.querySelector(`.${field.id}-error`);

//   field.classList.add(formData.inputErrorClass);
//   fieldError.textContent = field.validationMessage;
//   fieldError.classList.add(formData.errorClass);
// };

// /**
//  * Функция скрытия ошибки валидации поля формы
//  *
//  * @param {HTMLElement} form dom элемент формы
//  * @param {HTMLElement} field dom элемент поля формы
//  * @param {TFormData} formData параметры валидации формы
//  */
// const hideError = (form, field, formData) => {
//   const fieldError = form.querySelector(`.${field.id}-error`);

//   field.classList.remove(formData.inputErrorClass);
//   fieldError.classList.remove(formData.errorClass);
//   fieldError.textContent = '';
// };

// /**
//  * Функция подписки на события изменения данных в полях формы
//  *
//  * @param {HTMLElement} form dom элемент формы
//  * @param {Array.<HTMLElement>} fields массив dom элементов полей формы
//  * @param {HTMLElement} button dom элемент кнопки
//  * @param {TFormData} formData параметры валидации формы
//  */
// const enableFieldsValidation = (form, fields, button, formData) => {
//   fields.forEach((field) => {
//     field.addEventListener('input', () => {
//       isFieldValid(form, field, formData);
//       toggleButtonDisable(fields, button, formData);
//     });
//   });
// };

// /**
//  * Функция установки валидации в начальное состояние
//  *
//  * @param {HTMLElement} form dom элемент формы
//  * @param {Array.<HTMLElement>} fields массив dom элементов полей формы
//  * @param {HTMLElement} button dom элемент кнопки
//  * @param {TFormData} formData параметры валидации формы
//  */
// const resetValidation = (form, fields, button, formData) => {
//   toggleButtonDisable(fields, button, formData);

//   fields.forEach((field) => {
//     hideError(form, field, formData);
//   });
// };

// /**
//  * Функция первичной инициализации валидации
//  *
//  * @param {TFormData} formData параметры валидации формы
//  * @returns {{ reset: Function }} объект с методом сброса валидации
//  */
// const enableValidation = (formData) => {
//   const form = document.querySelector(formData.formSelector);
//   const fields = [...form.querySelectorAll(formData.inputSelector)];
//   const button = form.querySelector(formData.submitButtonSelector);

//   enableFieldsValidation(form, fields, button, formData);

//   return {
//     reset: resetValidation.bind(null, form, fields, button, formData),
//   };
// };

class FormValidator {
  constructor(formData) {
    this.formData = formData;
  }

  #isFieldValid(form, field) {
    !field.validity.valid
      ? this.#showError(form, field)
      : this.#hideError(form, field);
  }

  // #hasInvalidField(fields) {
  //   fields.some((field) => !field.validity.valid);
  // }

  #lockButton(button) {
    button.classList.add(this.formData.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  }

  #unlockButton(button) {
    button.classList.remove(this.formData.inactiveButtonClass);
    button.removeAttribute('disabled');
  }

  #toggleButtonDisable(fields, button) {
    fields.some((field) => !field.validity.valid)
      ? this.#lockButton(button)
      : this.#unlockButton(button);
  }

  #showError(form, field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = form.querySelector(`.${field.id}-error`);

    field.classList.add(inputErrorClass);
    fieldError.textContent = field.validationMessage;
    fieldError.classList.add(errorClass);
  }

  #hideError(form, field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = form.querySelector(`.${field.id}-error`);

    field.classList.remove(inputErrorClass);
    fieldError.classList.remove(errorClass);
    fieldError.textContent = '';
  }

  #enableFieldsValidation(form, fields, button) {
    fields.forEach((field) => {
      field.addEventListener('input', () => {
        this.#isFieldValid(form, field);
        this.#toggleButtonDisable(fields, button);
      });
    });
  }

  #resetValidation(form, fields, button) {
    this.#toggleButtonDisable(fields, button);

    fields.forEach((field) => {
      this.#hideError(form, field);
    });
  }

  get enableValidation() {
    const { formSelector, inputSelector, submitButtonSelector } = this.formData;
    const form = document.querySelector(formSelector);
    const fields = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    this.#enableFieldsValidation(form, fields, button);

    return this.#resetValidation(form, fields, button);
  }
}
