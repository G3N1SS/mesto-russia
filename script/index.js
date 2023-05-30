document.querySelector(".profile__edit-button").addEventListener("click",function(){
    document.getElementById("popup-page").classList.add("popup_opened")
})

document.querySelector(".popup__close").addEventListener("click",function(){
    document.getElementById("popup-page").classList.remove("popup_opened")
})

document.querySelector(".popup__save").addEventListener("click",function(){
    document.getElementById("popup-page").classList.remove("popup_opened")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("popup-page").classList.remove("popup_opened")
    }
});

document.querySelector(".popup .popup__box").addEventListener("click", event => {
    event._isClickWithInPopup = true;
});
document.getElementById("popup-page").addEventListener("click", event => {
    if (event._isClickWithInPopup) return;
    event.currentTarget.classList.remove("popup_opened");
})

let firstName = document.querySelector(".profile__name");
let job = document.querySelector(".profile__job");

document.querySelector('.popup__name').defaultValue = firstName.textContent;
document.querySelector('.popup__job').defaultValue = job.textContent;

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function handleFormSubmit(evt) {
    evt.preventDefault();
    firstName.textContent = nameInput.value;
    job.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);

