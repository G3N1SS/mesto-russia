const popup = document.querySelector(".popup")
const profileEditButton = document.querySelector(".profile__edit-button");
const popupClose = popup.querySelector(".popup__close");
const popupSave = popup.querySelector(".popup__save")
const firstName = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');

nameInput.value = firstName.textContent;
jobInput.value = job.textContent;

function popupOpen(){
    popup.classList.add("popup_opened")
};

profileEditButton.addEventListener ("click", popupOpen);

function popupClosed(){
    popup.classList.remove("popup_opened")
};

popupClose.addEventListener("click", popupClosed);

function handleFormSubmit(evt) {
    evt.preventDefault();
    firstName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupClosed();
};
formElement.addEventListener('submit', handleFormSubmit);