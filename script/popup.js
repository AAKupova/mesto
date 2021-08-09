/**
 * @typedef TPopupConfig
 * @type {Object}
 * @property {String} popup селектор попапа
 * @property {String} open ссылка на кнопку открытия попапа
 * @property {String} openByElem css класс который должен присутствовать на элементе для открытия попапа
 * @property {String} close ссылка на кнопку закрытия попапа
 * @property {Function} onOpen колбек на открытие попапа
 * @property {Function} onClose колбек на закрытие попапа
 */

/**
 * Функция создания попапа
 *
 * @param {TPopupConfig} config
 * @returns {{ hide: Function }} объект с методом закрытия попапа
 */
export const createPopup = (config) => {
  /** @type {HTMLElement} dom элемент попапа */
  const popup = document.querySelector(config.popup);
  /** @type {HTMLElement} dom элемент кнопки открытия попапа */
  const openButton = document.querySelector(config.open);
  /** @type {HTMLElement} dom э лемент кнопки закрытия попапа */
  const closeButton = popup.querySelector(config.close);

  /**
   * Обработчик закрытия попапа по escape
   *
   * @param {Event} e
   */
  const handlerClosePopupByEsc = (e) => {
    if (e.key === 'Escape') {
      hide();
    }
  };

  /**
   * Обработчик открытия попапа
   *
   * @param {Event} e
   */
  const handlerOpen = (e) => {
    if (!config.openByElem || e.target.classList.contains(config.openByElem)) {
      if (config.onOpen) {
        config.onOpen(e);
      }

      popup.classList.remove('popup_hidden');

      document.addEventListener('keydown', handlerClosePopupByEsc);
    }
  };

  /**
   * Функция закрытия попапа
   *
   * @param {Event} e
   */
  const hide = (e) => {
    if (config.onClose) {
      config.onClose(e);
    }

    popup.classList.add('popup_hidden');

    document.removeEventListener('keydown', handlerClosePopupByEsc);
  };

  /**
   * Обработчик закрытия попапа
   *
   * @param {Event} e
   */
  const handlerHide = (e) => {
    const { target } = e;

    if (target === popup || target === closeButton) {
      hide(e);
    }
  };

  openButton.addEventListener('click', handlerOpen);
  popup.addEventListener('click', handlerHide);

  return {
    hide,
  };
};

class Popup {
  #popup;

  constructor(popupSelector) {
    this.#popup = document.querySelector(popupSelector);
  }

  open() {
    this.#popup.classList.remove('popup_hidden');

    this.#addEventListeners();
  }

  close() {
    this.#popup.classList.add('popup_hidden');

    this.#removeEventListeners();
  }

  #handlerClosePopupByEsc(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  #addEventListeners() {
    document.addEventListener(
      'keydown',
      this.#handlerClosePopupByEsc.bind(this)
    );
  }

  #removeEventListeners() {
    document.removeEventListener(
      'keydown',
      this.#handlerClosePopupByEsc.bind(this)
    );
  }

  setEventListeners() {
    const closeButton = this.#popup.querySelector('.popup__close');
    closeButton.addEventListener('click', this.close.bind(this));
  }
}

const openPopupAdd = () => {
  const classPopupu = new Popup('.popup_js_add');
  classPopupu.open();
  classPopupu.setEventListeners();
};

const buttonPopupAdd = document.querySelector('.profile__add-btn');

buttonPopupAdd.addEventListener('click', openPopupAdd);

const openPopupEdit = () => {
  const classPopupu = new Popup('.popup_js_edit');
  classPopupu.open();
  classPopupu.setEventListeners();
};

const buttonPopupEdit = document.querySelector('.profile__edit');

buttonPopupEdit.addEventListener('click', openPopupEdit);
