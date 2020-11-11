var buyLinks = document.querySelectorAll(".modal-buy-button");
var buyPopup = document.querySelector(".buy-form");
var buyClose = buyPopup.querySelector(".modal-close");

buyClose.onclick = function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove('modal-show');
};

for (var buyLink of buyLinks) {
  buyLink.onclick = function (evt) {
    evt.preventDefault();
    buyPopup.classList.add('modal-show');
  };
}
