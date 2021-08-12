/** @class Section - создание экземпляр для вставки контента на страницу. */
export default class Section {
  #items;

  #renderer;

  #container;

  /** @constructor */
  /**
   * Параметры:
   * @callback renderer
   * @param {initialCards[]}  - массив объектов с данными.
   * @param {renderer}  - вызывает функцию отрисовки данных.
   * @param {HTMLElement} container - dom элемент контейнера.
   */
  constructor({ initialCards, renderer }, container) {
    this.#items = initialCards;
    this.#renderer = renderer;
    this.#container = container;
  }

  /** Метод отрисовки данных. */
  render() {
    this.#items.forEach((item) => this.#renderer(item));
  }

  /** Метод вставки данных на страницу. */
  addItem(domElement) {
    this.#container.prepend(domElement);
  }
}
