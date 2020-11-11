var letterLink = document.querySelector(".modal-letter-button");
var letterPopup = document.querySelector(".letter-form");
var letterClose = letterPopup.querySelector(".modal-close");

letterLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.add("modal-show");
});

letterClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  letterPopup.classList.remove("modal-show");
});