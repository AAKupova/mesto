const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__submit-btn_inactive",
  inputErrorClass: "`.${input.id}-error`",
  errorClass: "form__input-error_active",
};

const root = document.querySelector(".root");

const editButton = root.querySelector(".profile__edit");
const addButton = root.querySelector(".profile__add-btn");

const popupEdit = root.querySelector(".popup_js_edit");
const popupAdd = root.querySelector(".popup_js_add");
const popupPreview = root.querySelector(".popup_js_preview");

const profilName = root.querySelector(".profile__title");
const profilText = root.querySelector(".profile__text");
const containerCards = root.querySelector(".cards__list");
const card = root.querySelector(".card");

const formEdit = root.querySelector(".form_js_edit");
const formAdd = root.querySelector(".form_js_add");

const nameInput = root.querySelector(".form__input_type_name");
const jobInput = root.querySelector(".form__input_type_description");
const titleInput = root.querySelector(".form__input_type_title");
const linkInput = root.querySelector(".form__input_type_link");

const closeEdit = root.querySelector(".popup__close_js_edit");
const closeAdd = root.querySelector(".popup__close_js_add");
const closePreview = root.querySelector(".popup__close_js_preview");

function renderCards(arrCards) {
  arrCards.forEach((item) => addCards(createCard(item)));
}

renderCards(initialCards);

function createCard(item) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const imageElement = cardElement.querySelector(".card__image");
  const titleElement = cardElement.querySelector(".card__title");

  imageElement.src = item.link;
  imageElement.alt = item.name;
  titleElement.textContent = item.name;

  return cardElement;
}

function addCards(card) {
  containerCards.prepend(card);
}

const deleteButton = document.querySelector(".card__delete");

function clickLike(event) {
  if (event.target.classList.contains("card__like")) {
    event.target.classList.toggle("card__like_active");
  }
}

function openPopup(popup) {
  popup.classList.remove("popup_hidden");
  enableValidation(formData);
}

function closePopup(popup) {
  popup.classList.add("popup_hidden");
}

function openPropfilePopup() {
  nameInput.value = profilName.textContent.trim();
  jobInput.value = profilText.textContent.trim();

  openPopup(popupEdit);
}

function openAddCardPopup() {
  openPopup(popupAdd);
}

function openPopupPreview(event) {
  const e = event.target;

  if (e.classList.contains("card__image")) {
    const previewImg = root.querySelector(".preview__image");
    const previewText = root.querySelector(".preview__caption");

    previewImg.src = e.src;
    previewText.textContent = e.alt;

    openPopup(popupPreview);
  }
}

function closePopupPreview() {
  closePopup(popupPreview);
}

function closePopupAdd() {
  closePopup(popupAdd);
}

function closePopupEdit() {
  closePopup(popupEdit);
}

function formSubmitHandlerProfil(event) {
  event.preventDefault();

  profilName.textContent = nameInput.value.trim();
  profilText.textContent = jobInput.value.trim();

  closePopupEdit();
}

function formSubmitHandlerAddCard(event) {
  event.preventDefault();

  const itemCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  addCards(createCard(itemCard));
  closePopupAdd();

  formAdd.reset();
}

function deleteCard(event) {
  if (event.target.classList.contains("card__delete")) {
    event.target.closest(".card").remove();
  }
}

editButton.addEventListener("click", openPropfilePopup);
containerCards.addEventListener("click", openPopupPreview);
addButton.addEventListener("click", openAddCardPopup);

closeEdit.addEventListener("click", closePopupEdit);
closePreview.addEventListener("click", closePopupPreview);
closeAdd.addEventListener("click", closePopupAdd);

formEdit.addEventListener("submit", formSubmitHandlerProfil);
formAdd.addEventListener("submit", formSubmitHandlerAddCard);

containerCards.addEventListener("click", clickLike);
containerCards.addEventListener("click", deleteCard);
