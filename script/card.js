/** @type {HTMLElement} контайнер карточек */
const containerCards = document.querySelector('.cards__list');

/**
 * Функция рендора карточек
 *
 * @param {TInitialCards[]} arrCards массив данных карточек
 */
const renderCards = (arrCards) => {
  arrCards.forEach((item) => addCards(createCard(item)));
};

/**
 * Функция создания dom элемента карточки
 *
 * @param {TInitialCards} item данные карточки
 * @returns {HTMLElement} dom элемент карточки
 */
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

/**
 * Функция вставки карточки в контейнер
 *
 * @param {HTMLElement} card dom элемент карточки
 */
const addCards = (card) => {
  containerCards.prepend(card);
};

/**
 * Обработчик события лайка / дизлайка
 *
 * @param {Event} event
 */
const handlerClickLike = (event) => {
  if (event.target.classList.contains('card__like')) {
    event.target.classList.toggle('card__like_active');
  }
};

/**
 * Обработчик события удаления карточки
 *
 * @param {Event} event
 */
const handlerDeleteCard = (event) => {
  if (event.target.classList.contains('card__delete')) {
    event.target.closest('.card').remove();
  }
};

renderCards(initialCards);

containerCards.addEventListener('click', handlerClickLike);
containerCards.addEventListener('click', handlerDeleteCard);
