const formEdit = document.querySelector('.form_js_edit');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');

const profilName = document.querySelector('.profile__title');
const profilText = document.querySelector('.profile__text');

const formSubmitHandlerProfil = (event) => {
  event.preventDefault();

  profilName.textContent = nameInput.value.trim();
  profilText.textContent = jobInput.value.trim();

  closePopupEdit();
};

formEdit.addEventListener('submit', formSubmitHandlerProfil);
