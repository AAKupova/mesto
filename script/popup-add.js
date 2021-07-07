const popupAdd = document.querySelector('.popup_js_add');
const closeAdd = document.querySelector('.popup__close_js_add');

const openPopupAdd = () => {
  openPopup(popupAdd);
  enableValidation({
    ...formData,
    formSelector: '.form_js_add',
  });
};

const closePopupAdd = () => {
  closePopup(popupAdd);
  formAdd.reset();
};

closeAdd.addEventListener('click', closePopupAdd);
