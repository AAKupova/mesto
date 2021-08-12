export default class Section {
  #items;

  #renderer;

  #container;

  constructor({ initialCards, renderer }, containerSelector) {
    this.#items = initialCards;
    this.#renderer = renderer;
    this.#container = containerSelector;
  }

  render() {
    this.#items.forEach((item) => this.#renderer(item));
  }

  addItem(domElement) {
    this.#container.prepend(domElement);
  }
}
