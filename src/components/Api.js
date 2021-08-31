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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
        document.querySelector('.error__404').classList.toggle('error_hidden');
      });
  }

  getUser() {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}users/me`, {
      method: 'GET',
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  createCard(dataCard) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards`, {
      method: 'POST',
      body: JSON.stringify(dataCard),
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  disLike(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: 'DELETE',
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  like(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/likes/${id}`, {
      method: 'PUT',
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  deleteCard(id) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }

  UpdatePhoto(photo) {
    const { baseUrl, headers } = this.#options;
    return fetch(`${baseUrl}users/me/avatar `, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        avatar: photo.link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}
