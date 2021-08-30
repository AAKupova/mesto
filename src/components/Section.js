/** @class Section - создание экземпляр для вставки контента на страницу. */
export default class Section {
  /** @type {[Object]}  item. */
  #item;

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
  constructor({ result, oneRender }, container) {
    this.#item = result;
    this.#oneRender = oneRender;
    this.#container = container;
  }

  /** Метод отрисовки данных. */
  render() {
    this.#item.forEach((item) => {
      this.#oneRender(item);
    });
  }

  /** Метод вставки данных на страницу.
   * @param {HTMLElement} domElement - dom элемент карточки.
   */
  addItem(domElement) {
    this.#container.prepend(domElement);
  }
}
