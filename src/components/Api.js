export default class Api {
  #options;

  constructor(options) {
    this.#options = options;
  }

  getInitialCards() {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards`, {
      method: 'GET',
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  getUser() {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}users/me`, {
      method: 'GET',
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  createCard(dataCard) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards`, {
      method: 'POST',
      body: JSON.stringify(dataCard),
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  rewriteUserInfo(valueEdit) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}users/me`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        name: valueEdit.name,
        about: valueEdit.about,
      }),
    }).then((res) => this.#getResponseData(res));
  }

  disLike(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: 'DELETE',
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  like(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: 'PUT',
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  deleteCard(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers,
    }).then((res) => this.#getResponseData(res));
  }

  updatePhoto(photo) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}users/me/avatar `, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        avatar: photo.link,
      }),
    }).then((res) => this.#getResponseData(res));
  }

  // eslint-disable-next-line
  #getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }
}
