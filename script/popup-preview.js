const popupPreview = document.querySelector('.popup_js_preview');
const closePreview = document.querySelector('.popup__close_js_preview');

const openPopupPreview = (event) => {
  const e = event.target;

  if (e.classList.contains('card__image')) {
    const previewImg = root.querySelector('.preview__image');
    const previewText = root.querySelector('.preview__caption');

    previewImg.src = e.src;
    previewText.textContent = e.alt;

    openPopup(popupPreview);
  }
};

const closePopupPreview = () => closePopup(popupPreview);

closePreview.addEventListener('click', closePopupPreview);
