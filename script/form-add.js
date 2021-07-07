const formAdd = document.querySelector('.form_js_add');
const titleInput = document.querySelector('.form__input_type_title');
const linkInput = document.querySelector('.form__input_type_link');

const formSubmitHandlerAddCard = (event) => {
  event.preventDefault();

  const itemCard = {
    name: titleInput.value,
    link: linkInput.value,
  };

  addCards(createCard(itemCard));
  closePopupAdd();
};

formAdd.addEventListener('submit', formSubmitHandlerAddCard);
