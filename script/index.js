let root = document.querySelector(".root"),
  editButton = root.querySelector(".profil__edit-icon"),
  closePopup = root.querySelector(".popup__close"),
  submitButton = root.querySelector(".form__submit-button");

function openPopup() {
  let popup = root.querySelector(".popup");

  if (popup.classList.contains("popup_close")) {
    return popup.classList.remove("popup_close");
  } else {
    return popup.classList.add("popup_close");
  }
}

function editProfil() {
  let name = root.querySelector(".form__input_type_name"),
    description = root.querySelector(".form__input_type_description"),
    profilName = root.querySelector(".profil__name"),
    profilText = root.querySelector(".profil__text");

  profilName.textContent = name.value;
  profilText.textContent = description.value;

  return openPopup();
}

editButton.addEventListener("click", openPopup);
closePopup.addEventListener("click", openPopup);
submitButton.addEventListener("click", editProfil);
