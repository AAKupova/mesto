/** @class FormValidator - создание экземпляра для валидации формы */
export class FormValidator {
  #form;
  #fields;
  #button;
  /** @constructor */
  /**
   * Параметры:
   * @param {object} formData - данные формы.
   */
  constructor(formData) {
    this.formData = formData;
  }

  /**
   * Метод валидации поля.
   *
   * @param {HTMLElement} form - форма которую валидируем.
   * @param {HTMLElement} field - поле которое валидируем.
   */
  #isFieldValid(form, field) {
    !field.validity.valid
      ? this.#showError(form, field)
      : this.#hideError(form, field);
  }

  /**
   * Метод блокировки кнопки.
   *
   * @param {HTMLElement} button - dom элемент кнопки.
   */
  #lockButton(button) {
    button.classList.add(this.formData.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  }

  /**
   * Метод разблокировки кнопки.
   *
   * @param {HTMLElement} button - dom элемент кнопки.
   */
  #unlockButton(button) {
    button.classList.remove(this.formData.inactiveButtonClass);
    button.removeAttribute('disabled');
  }

  /**
   * Метод переключения состояния disabled кнопки.
   *
   * @param {Array.<HTMLElement>} fields - массив dom элементов полей формы.
   * @param {HTMLElement} button - dom элемент кнопки.
   */
  #toggleButtonDisable(fields, button) {
    fields.some((field) => !field.validity.valid)
      ? this.#lockButton(button)
      : this.#unlockButton(button);
  }

  /**
   * Метод показа ошибки валидации поля формы.
   *
   * @param {HTMLElement} form - dom элемент формы.
   * @param {HTMLElement} field - dom элемент поля формы.
   */
  #showError(form, field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = form.querySelector(`.${field.id}-error`);

    field.classList.add(inputErrorClass);
    fieldError.textContent = field.validationMessage;
    fieldError.classList.add(errorClass);
  }

  /**
   * Метод скрытия ошибки валидации поля формы.
   *
   * @param {HTMLElement} form - dom элемент формы.
   * @param {HTMLElement} field - dom элемент поля формы.
   */
  #hideError(form, field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = form.querySelector(`.${field.id}-error`);

    field.classList.remove(inputErrorClass);
    fieldError.classList.remove(errorClass);
    fieldError.textContent = '';
  }

  /**
   * Метод подписки на события изменения данных в полях формы.
   *
   * @param {HTMLElement} form - dom элемент формы.
   * @param {Array.<HTMLElement>} fields - массив dom элементов полей формы.
   * @param {HTMLElement} button - dom элемент кнопки.
   */
  #enableFieldsValidation(form, fields, button) {
    fields.forEach((field) => {
      field.addEventListener('input', () => {
        this.#isFieldValid(form, field);
        this.#toggleButtonDisable(fields, button);
      });
    });
  }

  /**
   * Метод установки валидации в начальное состояние.
   *
   * @param {HTMLElement} form - dom элемент формы.
   * @param {Array.<HTMLElement>} fields - массив dom элементов полей формы.
   * @param {HTMLElement} button - dom элемент кнопки.
   */
  resetValidation(form, fields, button) {
    const fieldsReset = fields || this.#fields;
    const buttonReset = button || this.#button;
    const formReset = form || this.#form;

    this.#toggleButtonDisable(fieldsReset, buttonReset);

    fieldsReset.forEach((field) => {
      this.#hideError(formReset, field);
    });
  }

  /**
   * Метод первичной инициализации валидации.
   *
   * @returns {{ reset: Function }} - объект с методом сброса валидации
   */
  enableValidation() {
    const { formSelector, inputSelector, submitButtonSelector } = this.formData;
    const form = document.querySelector(formSelector);
    const fields = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    this.#form = form;
    this.#fields = fields;
    this.#button = button;

    this.#enableFieldsValidation(form, fields, button);
  }
}
