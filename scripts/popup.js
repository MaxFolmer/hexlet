function openPopup(popupElement) {
  document.addEventListener("keydown", closePopupByEsc)
  popupElement.classList.add("popup_opened")
}

function closePopup(popupElement) {
  document.addEventListener("keydown", closePopupByEsc); popupElement.classList.remove("popup_opened");
}


function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
  const popup = document.querySelector(".popup_opened");
  closePopup(popup)
  }
}

// function closePopupByClickInOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//   closePopup(evt.target);
//   }
// }


