const root = document.querySelector(".root");
const editButton = root.querySelector(".profil__edit");
const closeButton = root.querySelector(".popup__close");
const formElement = root.querySelector(".form");
const listElement = root.querySelector(".cards__list");
const popup = root.querySelector(".popup");
const submitButton = root.querySelector(".form__submit-button");
const nameInput = root.querySelector(".form__input_type_name");
const jobInput = root.querySelector(".form__input_type_description");
const profilName = root.querySelector(".profil__name");
const profilText = root.querySelector(".profil__text");

function openPopup() {
  popup.classList.remove("popup_hidden");
}

function closePopup({ target }) {
  if (target === popup || target === closeButton || target === submitButton) {
    popup.classList.add("popup_hidden");
  }
}

function formSubmitHandler(event) {
  event.preventDefault();

  profilName.textContent = nameInput.value;
  profilText.textContent = jobInput.value;

  closePopup(event);
}

function like({ target }) {
  if (target.classList.contains("cards__icon")) {
    target.classList.toggle("cards__icon_activ");
  }
}

editButton.addEventListener("click", openPopup);
popup.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
listElement.addEventListener("click", like);
