/** @class UserInfo - создание экземпляр для редактирование данных на страницу. */

export default class UserInfo {
  /** @type {HTMLElement}  name - элемент для вставки ника. */
  #name;

  /** @type {HTMLElement}  job - элемент для вставки текста. */
  #job;

  /** @type {HTMLElement}  photo - контейнер для вставки фото. */
  #photo;

  /** @type {Object}  valueEdit - данные пользователя. */
  #valueEdit;

  /** @constructor */
  /**
   * Параметры:
   * @param {HTMLElement} name dom элемент - имя профиля.
   * @param {HTMLElement} job dom элемент - описание профиля.
   * @param {HTMLElement} photo dom элемент - фото профиля.
   */
  constructor(name, job, photo) {
    this.#name = name;
    this.#job = job;
    this.#photo = photo;
    this.#valueEdit = {};
  }

  /**
   * Метод возрощает новые данные профиля.
   * @return {Object} - данные профиля.
   */
  getUserInfo() {
    return this.#valueEdit;
  }

  /** Метод вставляет данные на страницу.
   * @param {Object} valueEdit - данные пользователя.
   */
  setUserInfo(valueEdit) {
    this.#valueEdit.name = valueEdit.name;
    this.#valueEdit.about = valueEdit.about;
    this.#valueEdit.avatar = valueEdit.avatar;

    this.#name.textContent = this.#valueEdit.name.trim();
    this.#job.textContent = this.#valueEdit.about.trim();
    this.#photo.src = this.#valueEdit.avatar;
  }
}
