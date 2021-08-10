export default class UserInfo {
  #name;

  #job;

  #valueEdit;

  constructor(name, job) {
    this.#name = name;
    this.#job = job;
  }

  getUserInfo() {
    return this.#valueEdit;
  }

  setUserInfo(valueEdit) {
    this.#valueEdit = valueEdit;
    this.#name.textContent = this.#valueEdit.name.trim();
    this.#job.textContent = this.#valueEdit.job.trim();
  }
}
