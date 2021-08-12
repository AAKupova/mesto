/** @class UserInfo - создание экземпляр для редактирование данных на страницу. */

export default class UserInfo {
  #name;

  #job;

  #valueEdit;

  /** @constructor */
  /**
   * Параметры:
   * @param {HTMLElement} name dom элемент - имя профиля.
   * @param {HTMLElement} job dom элемент - описание профиля.
   */
  constructor(name, job) {
    this.#name = name;
    this.#job = job;
    this.#valueEdit = {};
  }

  /**
   * Метод возрощает новые данные профиля.
   *
   * @return {Object} - данные профиля.
   */
  getUserInfo() {
    return this.#valueEdit;
  }

  /** Метод вставляет данные на страницу. */
  setUserInfo(valueEdit) {
    this.#valueEdit.name = valueEdit.name;
    this.#valueEdit.job = valueEdit.job;

    this.#name.textContent = this.#valueEdit.name.trim();
    this.#job.textContent = this.#valueEdit.job.trim();
  }
}
