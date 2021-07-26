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

  /**
   * Обработчик закрытия попапа по escape
   *
   * @param {Event} e
   */
  const handlerClosePopupByEsc = (e) => {
    if (e.key == 'Escape') {
      hide();
    }
  };

  openButton.addEventListener('click', handlerOpen);
  popup.addEventListener('click', handlerHide);

  return {
    hide,
  };
};
