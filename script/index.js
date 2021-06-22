const root = document.querySelector(".root");
const editButton = root.querySelector(".profile__edit");
const closeButton = root.querySelector(".popup__close");
const formElement = root.querySelector(".form");
const popup = root.querySelector(".popup_js_edit");
const nameInput = root.querySelector(".form__input_type_name");
const jobInput = root.querySelector(".form__input_type_description");
const profilName = root.querySelector(".profile__title");
const profilText = root.querySelector(".profile__text");

function openPopup() {
    nameInput.value = profilName.textContent.trim();
    jobInput.value = profilText.textContent.trim();

    popup.classList.remove("popup_hidden");
}

function closePopup() {
  popup.classList.add("popup_hidden");
}

function formSubmitHandler(event) {
  event.preventDefault();

  profilName.textContent = nameInput.value.trim();
  profilText.textContent = jobInput.value.trim();

  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
