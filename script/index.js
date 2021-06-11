const root = document.querySelector(".root");
const editButton = root.querySelector(".profil__edit");
const closeButton = root.querySelector(".popup__close");
const formElement = root.querySelector(".form");
const popup = root.querySelector(".popup");
const nameInput = root.querySelector(".form__input_type_name");
const jobInput = root.querySelector(".form__input_type_description");
const profilName = root.querySelector(".profil__name");
const profilText = root.querySelector(".profil__text");

function openPopup() {
  nameInput.value = profilName.innerText;
  jobInput.value = profilText.innerText;

  popup.classList.remove("popup_hidden");
}

function closePopup() {
  popup.classList.add("popup_hidden");
}

function formSubmitHandler(event) {
  event.preventDefault();

  profilName.innerText = nameInput.value;
  profilText.innerText = jobInput.value;

  closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
