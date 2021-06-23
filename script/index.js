const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

function cardsForEach () {
  initialCards.forEach(item =>  addCards(item));
}

function addCards (item){
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;

  containerCards.prepend(cardElement); 

}

cardsForEach ();

const deleteButton = document.querySelector(".card__delete");

function clickLike (event) {
  if(event.target.classList.contains('card__like')){
    event.target.classList.toggle('card__like_active');
  }
}

function openPopup(event) {
  if(event.target.classList.contains('profile__edit')){
    nameInput.value = profilName.textContent.trim();
    jobInput.value = profilText.textContent.trim();
    popupEdit.classList.remove("popup_hidden");
  } else if(event.target.classList.contains('profile__add-btn')){
    popupAdd.classList.remove("popup_hidden");
  } else if(event.target.classList.contains('card__image')){
    openPopupPreview (event.target.src, event.target.alt)
  }

}

function openPopupPreview (src, text) {
  const previewImg = root.querySelector(".preview__image");
  const previewText = root.querySelector(".preview__caption");

  previewImg.src = src;
  previewText.textContent = text;

  popupPreview.classList.remove("popup_hidden");
}

function closePopupPreview() {
  popupPreview.classList.add("popup_hidden");

}

function closePopupAdd() {
  popupAdd.classList.add("popup_hidden");
}

function closePopupEdit() {
  popupEdit.classList.add("popup_hidden");

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

  addCards(itemCard);
  closePopupAdd();

  titleInput.value = '';
  linkInput.value = '';
}

function deleteCard(event) {
  if(event.target.classList.contains('card__delete')){
    event.target.closest('.card').remove();
  }
}

editButton.addEventListener("click", openPopup);
containerCards.addEventListener("click", openPopup);
addButton.addEventListener("click", openPopup);

closeEdit.addEventListener("click", closePopupEdit);
closePreview.addEventListener("click", closePopupPreview);
closeAdd.addEventListener("click", closePopupAdd);

formEdit.addEventListener("submit", formSubmitHandlerProfil);
formAdd.addEventListener("submit", formSubmitHandlerAddCard);

containerCards.addEventListener("click", clickLike);
containerCards.addEventListener("click", deleteCard);
