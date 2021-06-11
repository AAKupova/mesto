const root = document.querySelector(".root");
const editButton = root.querySelector(".profil__edit");
const closeButton = root.querySelector(".popup__close");
const formElement = root.querySelector(".form");
const popup = root.querySelector(".popup");
const nameInput = root.querySelector(".form__input_type_name");
const jobInput = root.querySelector(".form__input_type_description");
const profilName = root.querySelector(".profil__name");
const profilText = root.querySelector(".profil__text");

function hiddenPopup() {
  nameInput.value = profilName.innerText;
  jobInput.value = profilText.innerText;

  popup.classList.toggle("popup_hidden");
}

function formSubmitHandler(event) {
  event.preventDefault();

  profilName.innerText = nameInput.value;
  profilText.innerText = jobInput.value;

  hiddenPopup();
}

editButton.addEventListener("click", hiddenPopup);
closeButton.addEventListener("click", hiddenPopup);
formElement.addEventListener("submit", formSubmitHandler);
