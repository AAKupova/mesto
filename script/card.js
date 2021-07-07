const deleteButton = document.querySelector('.card__delete');
const containerCards = document.querySelector('.cards__list');

const renderCards = (arrCards) => {
  arrCards.forEach((item) => addCards(createCard(item)));
};

const createCard = (item) => {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const imageElement = cardElement.querySelector('.card__image');
  const titleElement = cardElement.querySelector('.card__title');

  imageElement.src = item.link;
  imageElement.alt = item.name;
  titleElement.textContent = item.name;

  return cardElement;
};

const addCards = (card) => containerCards.prepend(card);

const clickLike = (event) => {
  if (event.target.classList.contains('card__like')) {
    event.target.classList.toggle('card__like_active');
  }
};

const deleteCard = (event) => {
  if (event.target.classList.contains('card__delete')) {
    event.target.closest('.card').remove();
  }
};

renderCards(initialCards);

containerCards.addEventListener('click', clickLike);
containerCards.addEventListener('click', deleteCard);
