/** @class Section - создание экземпляр для вставки контента на страницу. */
export default class Section {
  /** @type {HTMLElement}  container - для вставки карточки. */
  #container;

  /** @type {CallableFunction} oneRender - функцию отрисовки данных. */
  #oneRender;

  /** @constructor */
  /**
   * Параметры:
   * @callback oneRender
   * @param {initialCards[]}  - массив объектов с данными.
   * @param {oneRender}  - вызывает функцию отрисовки данных.
   * @param {HTMLElement} container - dom элемент контейнера.
   */
  constructor(container, { oneRender }) {
    this.#oneRender = oneRender;
    this.#container = container;
  }

  /** Метод отрисовки данных.
   * @param {[Object]} result - данные для создания элемента.
   * @param { Object } dataUser - данные пользователя.
   */
  render(result, dataUser) {
    result.forEach((item) => {
      this.#oneRender(item, dataUser);
    });
  }

  /** Метод вставки данных на страницу.
   * @param {HTMLElement} domElement - dom элемент карточки.
   */
  addItem(domElement) {
    this.#container.prepend(domElement);
  }
}
