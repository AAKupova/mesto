const isValid = (form, input, formData) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage, formData);
  } else {
    hideError(form, input, formData);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formData) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formData.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "disabled");
  } else {
    buttonElement.classList.remove(formData.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const showError = (form, input, message, formData) => {
  const formError = form.querySelector(`.${input.id}-error`);
  input.classList.add("form__input_type_error");
  formError.textContent = message;
  formError.classList.add(formData.errorClass);
};

const hideError = (form, input, formData) => {
  const formError = form.querySelector(`.${input.id}-error`);
  input.classList.remove("form__input_type_error");
  formError.classList.remove(formData.errorClass);
  formError.textContent = "";
};

const setEventListeners = (formData, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formData.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formData.submitButtonSelector
  );

  if (!buttonElement.classList.contains("default-asset")) {
    toggleButtonState(inputList, buttonElement, formData);
  }

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, formData);
      toggleButtonState(inputList, buttonElement, formData);
    });
  });
};

const enableValidation = (formData) => {
  const formList = Array.from(document.querySelectorAll(formData.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputList = Array.from(
        formElement.querySelectorAll(formData.inputSelector)
      );
      const buttonElement = formElement.querySelector(
        formData.submitButtonSelector
      );

      toggleButtonState(inputList, buttonElement, formData);
    });
    setEventListeners(formData, formElement);
  });
};
