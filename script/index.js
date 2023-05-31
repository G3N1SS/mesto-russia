const popup = document.querySelector(".popup")
const profileEditButton = document.querySelector(".profile__edit-button");
const popupClose = popup.querySelector(".popup__close");
const popupSave = popup.querySelector(".popup__save")
const firstName = document.querySelector(".profile__name");
const job = document.querySelector(".profile__job");
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_name');
const jobInput = popup.querySelector('.popup__input_job');

profileEditButton.addEventListener("click",function(){
    popup.classList.add("popup_opened")
});

popupClose.addEventListener("click",function(){
    popup.classList.remove("popup_opened")
});

nameInput.value = firstName.textContent;
jobInput.value = job.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault();
    firstName.textContent = nameInput.value;
    job.textContent = jobInput.value;   
}
formElement.addEventListener('submit', handleFormSubmit);
popupSave.addEventListener("click",function(){
    popup.classList.remove("popup_opened")
}); 