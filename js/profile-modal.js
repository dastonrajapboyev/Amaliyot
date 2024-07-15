const burgerMenu = document.querySelector(".burger-menu");
const flightInfo = document.querySelector(".flight-info");
const rightColumn = document.querySelector(".right-column");

burgerMenu.addEventListener("click", () => {
  flightInfo.classList.toggle("show");
  rightColumn.classList.toggle("show");
});
//==========================

let profileModal = document.querySelector(".profile-info_modal");
let user = document.querySelector(".user-prof");

user.addEventListener("click", function (event) {
  profileModal.classList.add("show-modal");
  event.stopPropagation();
});

window.addEventListener("click", function (event) {
  if (!profileModal.contains(event.target)) {
    profileModal.classList.remove("show-modal");
  }
});

profileModal.addEventListener("click", function (event) {
  event.stopPropagation();
});
