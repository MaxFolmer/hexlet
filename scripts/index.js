// DOM узлы

const elementsList = document.querySelector(".elements__list");
const template = document.querySelector("#card").content;

const profileAvatar = document.querySelector(".profile__avatar")
const profileName = document.querySelector(".profile-info__title")
const profileInfo = document.querySelector(".profile-info__description")
const editButton = document.querySelector(".profile-info__edit-btn")

const elementList = document.querySelector(".elements__list")

const editPopup = document.querySelector("#edit-popup")
const popupFormEdit = document.forms["edit-form"]
const inputName = popupFormEdit.querySelector(".form__item-title")
const inputSubtitle = popupFormEdit.querySelector(".form__item-subtitle")
const popupFormEditButton = popupFormEdit.querySelector('.form__submit')

const popupCloseButtonsList = document.querySelectorAll(".popup__close-icon")

console.log(popupCloseButtonsList)

// Функция создания карточки, темплейт карточки
function createCard(cardData, deleteCallback) {
  const cardElement = template.querySelector(".elements__item").cloneNode(true);
  
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__tresh");
  // const likeButton = cardElement.querySelector(".card__icon");

  cardImage.src = cardData.cardLink;
  cardImage.alt = cardData.cardTitle;
  cardTitle.textContent = cardData.cardTitle;

  deleteButton.addEventListener("click", () => deleteCallback(cardElement));

  return cardElement;
}

// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Вывести карточки на страницу
initialCards.forEach((cardData) => {
  const card = createCard(cardData, deleteCard);
  elementsList.appendChild(card);
});

// Повесить обработчик клика на кнопку лайка
elementsList.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__icon")) {
    evt.target.classList.toggle("card__icon_active");
  }
});

popupCloseButtonsList.forEach((btn) => {
  const popup = btn.closest(".popup");
  popup.addEventListener("mousedown", closePopupByClickInOverlay) 
  btn.addEventListener("click", ()=> closePopup(popup))
})

editButton.addEventListener("click", openEditPopup); popupFormEdit.addEventListener("submit", handleFormSubmitEdit);

function openEditPopup() {
  inputName.value = profileName.textContent
  inputSubtitle.value = profileInfo.textContent
  openPopup(editPopup)
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault()

  profileName.textContent = inputName.value
  profileInfo.textContent = inputSubtitle.value

  closePopup(editPopup)
}


function closePopupByClickInOverlay(evt) {
  if (evt.target === evt.currentTarget) {
  closePopup(evt.target);
  }
}





// function createCard(cardData, deleteCallback) {
//   const cardTemplate = document.quervselector("#card").content
//   const cardElement = cardTemplate.querySelector (".elements__item").cloneNode (true)
// }


// const cardImage = cardElement.querySelector(".card__image")
// const cardTitle = cardElemeht.querySelector(".card__title")
// const cardTresh = cardElement.queryselector(".card__tresh")


// cardImage.src = cardData.cardLink;
// cardImage.alt = cardData.cardTitle;
// cardTitle.textContent= cardData.cardTitle;

