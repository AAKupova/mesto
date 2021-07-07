const popupEdit = document.querySelector('.popup_js_edit');
const closeEdit = document.querySelector('.popup__close_js_edit');

const openPopupEdit = () => {
  nameInput.value = profilName.textContent.trim();
  jobInput.value = profilText.textContent.trim();

  openPopup(popupEdit);
  enableValidation({
    ...formData,
    formSelector: '.form_js_edit',
  });
};

const closePopupEdit = () => {
  closePopup(popupEdit);
  formEdit.reset();
};

closeEdit.addEventListener('click', closePopupEdit);
