//переменные
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popupProfile");
const popupAdd = document.querySelector(".popupAdd");
const profileEditButton = document.querySelector(".profile__edit-button");
const cardAddButton = document.querySelector(".profile__add-button");
const popupCloseProfile = document.querySelector(".popup__close_profile");
const popupCloseAdd = document.querySelector(".popup__close_add");
const popupSave = document.querySelector(".popup__save")
const firstName = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const formElementProfile = document.querySelector('.popup__form_profile');
const formElementAdd = document.querySelector(".popup__form_add");
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const elements = document.querySelector('.elements');
const placeInput = document.querySelector('.popup__input_type_place');
const imageInput = document.querySelector('.popup__input_type_image');
const placeName = document.querySelector('.elements__name');
const image = document.querySelector('.elements__image');
const cardTemplate = document.querySelector('.element-template').content;
const card = document.querySelector('.elements__cards');
const placesContainer = document.querySelector('.element');
const elementLikeBtn = placesContainer.querySelectorAll('.elements__like-button');
const elementLikeBtnArr = Array.from(elementLikeBtn);
const popupImages = document.querySelector(".popupImages");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupCloseImage = document.querySelector(".popup__close_image");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
const createCard = ({name,link}) => {
  const newCard = cardTemplate.querySelector(".elements__cards").cloneNode(true);
  const cardImage = newCard.querySelector('.elements__image');
  const cardDelete = newCard.querySelector(".elements__delete-button");
  const cardName = newCard.querySelector(".elements__name");
  const cardLike = newCard.querySelector(".elements__like-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;

  cardDelete.addEventListener("click", function(){
    newCard.remove();
  });

  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("elements__like-button_active");
  });

  cardImage.addEventListener("click", function() {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
    openPopup(popupImages);
  });

  return newCard
};

//функции

function popupProfileOpen(){
  openPopup(popupProfile);
  nameInput.value = firstName.textContent;
  jobInput.value = job.textContent;
};

function popupAddOpen(){
  openPopup(popupAdd);
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function popupClosedProfile(){
  closePopup(popupProfile);
}

function popupClosedAdd(){
  closePopup(popupAdd);
};

function popupClosedImage(){
  closePopup(popupImages);
};

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  firstName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupClosedProfile();
};

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const dataCard = {
    name: placeInput.value,
    link: imageInput.value
  };
  renderCard(dataCard);
  popupClosedAdd();
  evt.target.reset()
};

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  placeName.textContent = placeInput.value;
  image.src = imageInput.value;
  popupClosedAdd();
};

function render() {
  initialCards.forEach(renderCard);
};

function renderCard(data) { 
  const placeElement = createCard(data);
  placesContainer.prepend(placeElement);
};

//слушатели/обработчики

profileEditButton.addEventListener("click", popupProfileOpen);

cardAddButton.addEventListener("click", popupAddOpen);

popupCloseProfile.addEventListener("click", popupClosedProfile);

popupCloseAdd.addEventListener("click", popupClosedAdd);

popupCloseImage.addEventListener("click", popupClosedImage);

formElementProfile.addEventListener('submit', handleFormSubmitProfile);

formElementAdd.addEventListener('submit', handleFormSubmitAdd);

//вызов функций

render();
