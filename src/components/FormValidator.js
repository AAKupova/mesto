/** @class FormValidator - создание экземпляра для валидации формы */
export default class FormValidator {
  /** @type {HTMLElement}  #form - dom форма. */
  #form;

  /** @type {HTMLElement}  #fields - поля формы. */
  #fields;

  /** @type {HTMLElement}  #button - кнопка формы. */
  #button;

  /** @type {object}  formData - данные формы */
  formData;

  /** @constructor */
  /**
   * Параметры:
   * @param {object} formData - данные формы.
   */
  constructor(formData) {
    this.formData = formData;
  }

  /** Метод валидации поля.
   * @param {HTMLElement} field - поле которое валидируем.
   */
  #isFieldValid(field) {
    if (!field.validity.valid) {
      this.#showError(field);
    } else {
      this.#hideError(field);
    }
  }

  /** Метод блокировки кнопки. */
  #lockButton() {
    this.#button.classList.add(this.formData.inactiveButtonClass);
    this.#button.setAttribute('disabled', 'disabled');
  }

  /** Метод разблокировки кнопки. */
  #unlockButton() {
    this.#button.classList.remove(this.formData.inactiveButtonClass);
    this.#button.removeAttribute('disabled');
  }

  /** Метод переключения состояния disabled кнопки. */
  #toggleButtonDisable() {
    const isNotValid = this.#fields.some((field) => !field.validity.valid);

    if (isNotValid) {
      this.#lockButton();
    } else {
      this.#unlockButton();
    }
  }

  /**
   * Метод показа ошибки валидации поля формы.
   * @param {HTMLElement} field - dom элемент поля формы.
   */
  #showError(field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = this.#form.querySelector(`.${field.id}-error`);

    field.classList.add(inputErrorClass);
    fieldError.textContent = field.validationMessage;
    fieldError.classList.add(errorClass);
  }

  /**
   * Метод скрытия ошибки валидации поля формы.
   * @param {HTMLElement} field - dom элемент поля формы.
   */
  #hideError(field) {
    const { inputErrorClass, errorClass } = this.formData;
    const fieldError = this.#form.querySelector(`.${field.id}-error`);

    field.classList.remove(inputErrorClass);
    fieldError.classList.remove(errorClass);
    fieldError.textContent = '';
  }

  /** Метод подписки на события изменения данных в полях формы. */
  #enableFieldsValidation() {
    this.#fields.forEach((field) => {
      field.addEventListener('input', () => {
        this.#isFieldValid(field);
        this.#toggleButtonDisable();
      });
    });
  }

  resetForm() {
    this.#form.reset();
  }

  /** Метод установки валидации в начальное состояние. */
  resetValidation() {
    this.#toggleButtonDisable();
    this.#fields.forEach((field) => {
      this.#hideError(field);
    });
  }

  /** Метод первичной инициализации валидации. */
  enableValidation() {
    const { formSelector, inputSelector, submitButtonSelector } = this.formData;
    const form = document.querySelector(formSelector);
    const fields = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    this.#form = form;
    this.#fields = fields;
    this.#button = button;

    this.#enableFieldsValidation();
  }
}
